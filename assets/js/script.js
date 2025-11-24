const productos = [
 {id:1, nombre:"Sobre Mega Evolution Pokemon", precio:5500, img:"assets/img/pokemon.jpg", desc:"Sobre de expansión mega evolution."},
 {id:2, nombre:"Legendary 5D's Yu-Gi-Oh!", precio:35000, img:"assets/img/yugioh.png", desc:"3 mazos conmemorativos de 5D's."},
 {id:3, nombre:"Sobre One Piece op13", precio:6000, img:"assets/img/op.png", desc:"Sobre de expansión op13 One Piece."},
 {id:4, nombre:"Sleeves standar", precio:3000, img:"assets/img/sleevees.jpg", desc:"Fundas protectoras para cartas."}
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarCarritoUI(){
    document.getElementById("carritoCount").textContent =
        carrito.reduce((a,p)=>a+p.cantidad,0);
}

actualizarCarritoUI();

function cargarProductos() {
    const grid = document.getElementById("productGrid");

    productos.forEach(p=>{
        grid.innerHTML += `
        <div class="col-md-3">
            <div class="card shadow h-100">
                <img src="${p.img}" class="card-img-top">
                <div class="card-body text-center">
                    <h5>${p.nombre}</h5>
                    <p class="text-success fw-bold">$${p.precio}</p>
                    <button class="btn btn-primary w-100 mb-2" onclick="agregarCarrito(${p.id})">Agregar</button>
                    <button class="btn btn-outline-secondary w-100" onclick="verDetalles(${p.id})">Ver detalles</button>
                </div>
            </div>
        </div>`;
    });
}

cargarProductos();

function agregarCarrito(id){
    let item = carrito.find(p=>p.id===id);
    if(item) item.cantidad++;
    else carrito.push({...productos.find(p=>p.id===id), cantidad:1});

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarritoUI();
}

function verDetalles(id){
    const p = productos.find(x=>x.id===id);

    document.getElementById("detailImg").src = p.img;
    document.getElementById("detailName").textContent = p.nombre;
    document.getElementById("detailDesc").textContent = p.desc;
    document.getElementById("detailPrice").textContent = p.precio;

    document.getElementById("detailAddBtn").onclick = ()=>agregarCarrito(p.id);

    document.querySelector("main").classList.add("d-none");
    document.getElementById("productDetails").classList.remove("d-none");
}

function volverInicio(){
    document.querySelector("main").classList.remove("d-none");
    document.getElementById("productDetails").classList.add("d-none");
}
