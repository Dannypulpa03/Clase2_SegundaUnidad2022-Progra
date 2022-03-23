//Eventos DOM//Documents object model, va dar a luz a los eventos
document
.getElementById("formulario-producto")//va a jalar el Id que tenemos en nuestro formulario
.addEventListener("submit",function(evento) { 
//agregamos un evento al botón de submit
//evaluar el comportamiento del formulario
evento.preventDefault();//cancelar el "refrescar la página" cuando guardamos el documento

//Obtener los valores del formulario 
const nombre = document.getElementById("nombre").value,
    precio = document.getElementById("precio").value,
    anio = document.getElementById("anio").value;

    //crear un nuevo objeto que posea los elementos que acabamos de tomar

    const producto = new Product(nombre, precio, anio);


    //crear un nuevo usuario de interfaz

    const ui = new UI();

    //INPUT DE VALIDACIÓN DE USUARIO
    if(nombre === "" || precio ==="" || anio === "" ){
        ui.showMessage("Por favor, ingrese los datos correspondientes.");

    }
    //guardar producto
    ui.addProducto(producto);
    ui.showMessage("Producto agregado");
    ui.resetForm();

});    

document.getElementById("producto-lista").addEventListener("click",(e) => {
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();

}
);

//Clase producto
class Producto{
    //constructor nos ayuda a tener una clase o estructura, para solamente invocarlos luego
    //para poder utilizar múltiples funciones con variables.
    constructor(nombre,precio,anio){
        this.nombre = nombre;
        this.precio = precio;
        this.anio = anio;
    }
}

//Clase usuario interfaz

class UI{
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
        
        
        <div class="tarjeta texto margen4">
        <div class="tarjeta-body">
            <strong>Producto</strong> : ${producto.nombre} -
            <strong>Precio</strong> : ${producto.precio} -
            <strong>Anio</strong> : ${producto.Anio} -
            <a href="#" class="btn btn-error" name="eliminar">Eliminar</a>
        </div>
    </div>
        `;

        productoLista.appendChild(elemento);//Este será un objeto hijo o un subobjeto

    }

    //resetear los valores del formulario
    resetForm(){
        document.getElementById("formulario-producto").reset();
    }

    deleteProducto(elemento){
        if(elemento.nombre === "eliminar"){
            element.parentElement.parentElement.remove();
            this.showMessage("El producto se a eliminado");
        }    
    }

    showMessage(mensaje,cssClass){
        const div = document.createElement("div");
        div.className=`alert alert-${cssClass}`;
        div.appendChild(documet.createTextMode(mensaje));

        //mostrar en el DOM

        const contenido = document.querySelector(".container");
        const app = document.querySelector("#App");

        //Insertar mensaje en el interfaz de usuario
        
        //Remover el mensaje luego de tres segundos
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);

        
    }
}


