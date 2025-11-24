let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderCarrito(){
    const tabla = document.getElementById("carritoTabla");
    tabla.innerHTML = "";

    carrito.forEach(p=>{
        tabla.innerHTML += `
        <tr>
            <td>${p.nombre}</td>
            <td>$${p.precio}</td>
            <td>${p.cantidad}</td>
            <td>$${p.precio * p.cantidad}</td>
            <td>
                <button class="btn btn-success btn-sm" onclick="cambiarCantidad(${p.id},1)">+</button>
                <button class="btn btn-success btn-sm" onclick="cambiarCantidad(${p.id},-1)">-</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${p.id})">Eliminar</button>
            </td>
        </tr>`;
    });
}

function cambiarCantidad(id,delta){
    let item = carrito.find(p=>p.id===id);
    if(!item) return;

    item.cantidad += delta;

    if(item.cantidad <= 0){
        carrito = carrito.filter(p=>p.id!==id);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

function eliminarProducto(id){
    carrito = carrito.filter(p=>p.id!==id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

renderCarrito();
