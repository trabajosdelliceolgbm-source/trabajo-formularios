const formularioCompra = document.getElementById("formularioCompra");
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const mensaje = document.getElementById("mensaje");

// Objeto con productos y precios
const productos = {
    teclado: 12000,
    mouse: 7000,
    pendrive: 5000
};

// Actualizar precio al cambiar producto
producto.addEventListener("change", () => {
    const productoSeleccionado = producto.value;

    if (productoSeleccionado === "") {
        precio.value = "";
        return;
    }

    precio.value = productos[productoSeleccionado];
});

// Calcular total
function calcularTotal(precioUnitario, cantidadProducto) {
    return precioUnitario * cantidadProducto;
}

// Formatear moneda
const formatearPrecio = (valor) => {
    return `$${valor.toLocaleString("es-CL")}`;
};

// Enviar formulario
formularioCompra.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreProducto = producto.value;
    const precioUnitario = Number(precio.value);
    const cantidadProducto = Number(cantidad.value);

    if (nombreProducto === "" || cantidad.value === "") {
        mensaje.innerHTML = "Debe seleccionar un producto e ingresar una cantidad.";
        return;
    }

    if (cantidadProducto <= 0) {
        mensaje.innerHTML = "La cantidad debe ser mayor a cero.";
        return;
    }

    const total = calcularTotal(precioUnitario, cantidadProducto);

    mensaje.innerHTML = `
    <strong>Resumen de compra</strong><br>
    Producto: ${nombreProducto}<br>
    Precio unitario: ${formatearPrecio(precioUnitario)}<br>
    Cantidad: ${cantidadProducto}<br>
    Total a pagar: ${formatearPrecio(total)}
  `;
});