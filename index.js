const Productos = [];


function agregarProducto(nombreProducto, cantidadQueSeVende, descripcion){
    Productos.push({
        nombreProducto,
        cantidadQueSeVende,
        descripcion,
    })
}

function validarDatos(dato) {
    return !isNaN(dato);
}

function logicaDeValidacion(pregunta) {
    let numero = Number(prompt(pregunta));
    let validado = validarDatos(numero);

    while (!validado) {
        alert("Eso no es un número. Por favor ingrese un número");
        numero = Number(prompt(pregunta));
        validado = validarDatos(numero);
    }
    return numero;
}
function agregarPrecioCostoVenta(nombreProducto, precioCosto){
    let productoEncontrado = Productos.find(product => product.nombreProducto === nombreProducto);
    let precioVenta = (precioCosto*1.14).toFixed(2);
    productoEncontrado.precioCosto = precioCosto;
    productoEncontrado.precioVenta = precioVenta;
    alert("El precio de costo y venta del producto " + productoEncontrado.nombreProducto + " fue modificado exitosamente")
    console.log("El precio de costo y venta del producto " + productoEncontrado.nombreProducto + " fue modificado exitosamente");
}

function eliminarProducto(nombreProducto){
    let productoEncontrado = Productos.findIndex(product => product.nombreProducto === nombreProducto);
    console.log(nombreProducto);
    if(productoEncontrado == -1){
        alert("Producto no encontrado")
        console.log("El producto no existe");
        return;
    }else{ 
        const confirmacion = confirm("¿Estas seguro que queres eliminar el producto " + Productos [productoEncontrado].nombreProducto + "?");
        if (confirmacion){
        alert("El producto " + Productos [productoEncontrado].nombreProducto + " fue eliminado");
        Productos.splice(productoEncontrado, 1);
        }else{
            alert("El producto " + Productos [productoEncontrado].nombreProducto + " no fue eliminado");
        }
    }
}

function mostrarProductos(){
    let mensaje = `Los productos que registraste son:`

    for (let i = 0; i < Productos.length; i++) {
        mensaje += `\n Nombre del producto: ` + Productos[i].nombreProducto + ` tiene un costo de: `+ Productos[i].precioCosto  +  ` y un precio de venta de: ` + Productos[i].precioVenta
    }
    alert(mensaje);
}

function principal (){
    let bandera = true;

    while (bandera){
        let opciones = Number(prompt("Bienvenido a tu tienda OnLine, ¿que quiere hacer?:\n 1-Agregar un producto\n 2-Agregar precio de costo y venta\n 3-Eliminar un producto\n 4-Mostrar prodcutos"));
    
        switch (opciones){
            case 0:
                return;
            case 1:
                let nombreProducto = prompt("¿Que nombre le vas a poner al producto que queres vender?");
                let cantidadQueSeVende = logicaDeValidacion("¿Por que cantidad vendes el producto?");
                let descripcion = prompt("¿desea agregar una breve descripcion acerca del producto?");
                agregarProducto(nombreProducto, cantidadQueSeVende, descripcion)
                bandera = confirm("¿quiere seguir operando?");
                break;
            case 2:
                let nombreEncontrarProducto = prompt("¿a que producto le queres agregar precio de costo?");
                let precioCosto = logicaDeValidacion("¿Cual es el precio de costo del producto?");
                agregarPrecioCostoVenta(nombreEncontrarProducto, precioCosto);
                bandera = confirm("¿quiere seguir operando?");
                break;
            case 3:
                let nombreProductoAEliminar = prompt("¿Cual es el nombre del producto que deseas eliminar?");
                eliminarProducto(nombreProductoAEliminar);
                bandera = confirm("¿quiere seguir operando?");
                break;
            case 4:
                mostrarProductos()
                bandera = confirm("¿quiere seguir operando?");
                break;
            default:
                bandera = confirm("Operacion invalida ¿quiere seguir operando?");
                break;
        }
    }
}

principal();

console.log(Productos);