const Productos = [
    {id: 1, foto: "/img/Gentle Milk Cleanser.jpg" ,nombre: "Gentle Milk Cleanser", cantidad: 190, descripcion: "Leche limpiadora suavizante", precio: 2900, codigo: 10058, categoria: "limpiadores"},
    {id: 2, foto: "/img/Alpine Roses Cleanser Emulsion.jpg", nombre: "Alpine Roses Cleanser Emulsion", cantidad: 100, descripcion: "Suave microemulsion de limpieza que desmaquilla y limpia con rapidez", precio: 2850, codigo: 19198, categoria: "limpiadores"},
    {id: 3, foto: "/img/Vitamin C Cleanser.jpg",  nombre: "Vitamin C Cleanser", cantidad: 180, descripcion: "Gel limpiador espumante para rostro y cuerpo", precio: 2140, codigo: 12601, categoria: "limpiadores"},
    {id: 4, foto: "/img/Gentle Milk Cleanser.jpg",  nombre: "Gentle Milk Cleanser REFILL", cantidad: 175, descripcion: "Leche limpiadora suavizante", precio: 2330, codigo: 10323, categoria: "limpiadores"},
    {id: 5, foto: "/img/Conjac Sponge.png" ,nombre: "Conjac Sponge", cantidad: 1, descripcion: "Esponja facial elaborada con pura fibra vegetal de alta pureza y cenizas activas de Bambu Natural.", precio: 1800, codigo: 10477, categoria: "esponjas"},
    {id: 6, foto: "/img/Compressed Sponge.png" ,nombre: "Compressed Sponge", cantidad: 12, descripcion: "Esponjas comprimidas para retirar productos de higiene con mayor practicidad.", precio: 1200, codigo: 10453, categoria: "esponjas"},
    {id: 7, foto: "/img/Alpine Roses Scrub.bmp" ,nombre: "Alpine Roses Scrub", cantidad: 60, descripcion: "Crema exfoliante para una limpieza profunda de la piel", precio: 1910, codigo: 18900, categoria: "exfoliantes"},
    {id: 8, foto: "/img/Exfolianting Scrub.bmp" ,nombre: "Exfolianting Scrub", cantidad: 215, descripcion: "Gel exfoliante purificante.", precio: 2540, codigo: 13837, categoria: "exfoliantes"},
    {id: 9, foto: "/img/Pro Reti-C Scrub.bmp" ,nombre: "Pro Reti-C Scrub", cantidad: 250, descripcion: "Crema exfoliante antiedad de uso facial y corporal.", precio: 3990, codigo: 16821, categoria: "exfoliantes"},
    {id: 10, foto: "/img/Bi-Phase Micellar Water.bmp" ,nombre: "Bi-Phase Micellar Water", cantidad: 195, descripcion: "Agua micelar bifasica.", precio: 2510, codigo: 13868, categoria: "micelares"},
    {id: 11, foto: "/img/3 in 1 Micellar Water.jpg" ,nombre: "3 in 1 Micellar Water", cantidad: 220, descripcion: "Agua micelar triple accion: desmaquilla, limpia y refresca.", precio: 2720, codigo: 13844, categoria: "micelares"},
    {id: 12, foto: "/img/Alpine Roses Make Up Remover.bmp" ,nombre: "Alpine Roses Make Up Remover", cantidad: 60, descripcion: "Formula bifasica que remueve facilmente el maquillaje, inclusive el que es a prueba de agua, sin agredir la piel de los ojos y los labios.", precio: 1990, codigo: 11023, categoria: "micelares"},
    {id: 13, foto: "/img/Hyaluronic B5 Bio-Osmotic Lotion.bmp" ,nombre: "Hyaluronic B5 Bio-Osmotic Lotion", cantidad: 100, descripcion: "Locion hidratante osmoprotectora.", precio: 3200, codigo: 18269, categoria: "locionesBrumas"},
    {id: 14, foto: "/img/Vitamin C All-Day Radiance Lotion.bmp" ,nombre: "Vitamin C All-Day Radiance Lotion", cantidad: 100, descripcion: "Locion revitalizante y bioestimulante.", precio: 2750, codigo: 19433, categoria: "locionesBrumas"},
    {id: 15, foto: "/img/Alpine Roses Brume.bmp" ,nombre: "Alpine Roses Brume", cantidad: 100, descripcion: "Bruma antiage ideal para pieles delicadas o sensibles.", precio: 2780, codigo: 18887, categoria: "locionesBrumas"},
    {id: 16, foto: "/img/Zenskin S.O.S Rescue Brume.bmp" ,nombre: "Zenskin S.O.S Rescue Brume", cantidad: 100, descripcion: "Bruma calmante de rescate..", precio: 2720, codigo: 12341, categoria: "locionesBrumas"},
    {id: 17, foto: "/img/Thermal New Rich.jpg" ,nombre: "Thermal New Rich", cantidad: 50, descripcion: "Crema termal rica. Textura cremosa y emoliente.", precio: 3000, codigo: 13943, categoria: "hidratacionTermal"},
    {id: 18, foto: "/img/Thermal New Light.jpg" ,nombre: "Thermal New Light", cantidad: 50, descripcion: "Crema termal ligera. Textura crema gel ultraliviana.", precio: 3000, codigo: 13967, categoria: "hidratacionTermal"},
];


/* function calculoIva(precio){
    return precio * 0.21;
} */

let total = 0;

const suma = (a, b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21; 

carrito = 0;

function cargarCarrito(){
    let lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";
    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla-carrito");
    let fila = document.createElement("tr");
    let celda = document.createElement("td");
    celda.setAttribute("colspan", "3");
    celda.innerHTML = "Carrito de compras";
    fila.appendChild(celda);
    tabla.appendChild(fila);
    let fila2 = document.createElement("tr");
    let celda2 = document.createElement("td");
    celda2.innerHTML = "Cantidad";
    fila2.appendChild(celda2);
    let celda3 = document.createElement("td");
    celda3.innerHTML = "Producto";
    fila2.appendChild(celda3);
    let celda4 = document.createElement("td");
    celda4.innerHTML = "Precio";
    fila2.appendChild(celda4);
    let celda5 = document.createElement("td");
    celda5.innerHTML = "Iva";
    fila2.appendChild(celda5);
    let celda6 = document.createElement("td");
    celda6.innerHTML = "Subtotal";
    fila2.appendChild(celda6);
    tabla.appendChild(fila2);
    let fila3 = document.createElement("tr");
    let celda7 = document.createElement("td");
    celda7.innerHTML = " ";
    fila3.appendChild(celda7);
    let celda8 = document.createElement("td");
    celda8.innerHTML = " ";
    fila3.appendChild(celda8);
    let celda9 = document.createElement("td");
    celda9.innerHTML = " ";
    fila3.appendChild(celda9);
    let celda10 = document.createElement("td");
    celda10.innerHTML = " ";
    fila3.appendChild(celda10);
    let celda11 = document.createElement("td");
    celda11.innerHTML = " ";
    fila3.appendChild(celda11);
    tabla.appendChild(fila3);
}

function sumarProducto(precio){
    total = suma(suma(precio, iva(precio)), total);
    alert(`Total de la compra $${total}`);
}

function eliminarProducto(id){
    const producto = Productos.find(x => x.id === id);
    Limpiadores.splice(Productos.indexOf(producto), 1);
    total = total - suma(producto.precio, iva(producto.precio));
    alert('Producto eliminado');
}

/* function MostrarProductos(Productos){
    let html = '';
    Productos.forEach(producto => {
        html += `
        <div class="col-md-4 p-2">
        <div class="card p-2 border-0 shadow-sm">
        <img class="card-img-top" src="${producto.foto}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text">Codigo: ${producto.codigo}</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary" onclick="eliminarProducto(${producto.id})">Eliminar</button>
        </div>
        <small class="text-muted">${producto.cantidad}</small>
        </div>
        </div>
        </div>
        </div>
        `
    });
    document.getElementById('productos').innerHTML = html;
}; */

function calcularCuotas(cuotas){
    cadaCuota = total / cuotas;
    alert(`Debera pagar ${cuotas} cuotas de $${cadaCuota}`)
}


let nombreUsuario = prompt("Ingrese su nombre");
while(nombreUsuario === ""){
    alert("Debe ingresar su nombre");
    nombreUsuario = prompt("Ingrese su nombre")
}

let edadUsuario = parseInt(prompt("Ingrese su edad"));

if (edadUsuario < 18) {
    alert("Sos menor de edad! No podes ingresar a la tienda.");
}else{
let mensajeBienvenida = `Bienvenido/a ${nombreUsuario} a la tienda de Bendita`
alert(mensajeBienvenida)


let mensaje1 = prompt(`${nombreUsuario}, desea comprar un producto? (si/no)`);

if (mensaje1.toLowerCase() === "si"){
    while(mensaje1.toLowerCase() === "si"){
        let producto = prompt("1-Limpiadores\n2-Esponjas\n3-Exfoliantes\n4-Micelares\n5-Lociones y Brumas\n6-Hidratacion Termal");
        switch(producto){
            case '1':

                Productos.forEach((item) => {
                    let mensaje = `
                    ID: ${item.id}
                    Foto: ${item.foto}
                    Nombre: ${item.nombre}
                    Cantidad: ${item.cantidad}
                    Descripcion: ${item.descripcion}
                    Precio: ${item.precio}
                    Codigo: ${item.codigo}
                    `;
                    alert(mensaje);
                })
                
                let eleccion1 = parseInt(prompt("Que producto desea comprar? (1,2,3 o 4)"));

                switch(eleccion1){
                    case 1:
                        alert(`Agregaste al carro ${Limpiadores[0].nombre}: $${Limpiadores[0].precio} (sin iva)`);
                        sumarProducto(Limpiadores[0].precio);
                        cargarCarrito();
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Limpiadores[1].nombre}: $${Limpiadores[1].precio} (sin iva)`);
                        sumarProducto(Limpiadores[1].precio);
                        break;
                     case 3:
                        alert(`Agregaste al carro ${Limpiadores[2].nombre}: $${Limpiadores[2].precio} (sin iva)`);
                        sumarProducto(Limpiadores[2].precio);
                        break;
                    case 4:
                        alert(`Agregaste al carro ${Limpiadores[3].nombre}: $${Limpiadores[3].precio} (sin iva)`);
                        sumarProducto(Limpiadores[3].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
            break;
            case '2':
                Esponjas.forEach((item) => {
                    let mensaje = `
                    ID: ${item.id}
                    Foto: ${item.foto}
                    Nombre: ${item.nombre}
                    Cantidad: ${item.cantidad}
                    Descripcion: ${item.descripcion}
                    Precio: ${item.precio}
                    Codigo: ${item.codigo}
                    `;
                    alert(mensaje);
                })
                
                let eleccion2 = parseInt(prompt("Que producto desea comprar? (1 o 2)"));

                switch(eleccion2){
                    case 1:
                        alert(`Agregaste al carro ${Esponjas[0].nombre}: $${Esponjas[0].precio} (sin iva)`);
                        sumarProducto(Esponjas[0].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Esponjas[1].nombre}: $${Esponjas[1].precio} (sin iva)`);
                        sumarProducto(Esponjas[1].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            case '3':
                Exfoliantes.forEach((item) => {
                    let mensaje = `
                    ID: ${item.id}
                    Foto: ${item.foto}
                    Nombre: ${item.nombre}
                    Cantidad: ${item.cantidad}
                    Descripcion: ${item.descripcion}
                    Precio: ${item.precio}
                    Codigo: ${item.codigo}
                    `;
                    alert(mensaje);
                })
                
                let eleccion3 = parseInt(prompt("Que producto desea comprar? (1 o 2)"));

                switch(eleccion3){
                    case 1:
                        alert(`Agregaste al carro ${Exfoliantes[0].nombre}: $${Exfoliantes[0].precio} (sin iva)`);
                        sumarProducto(Exfoliantes[0].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Exfoliantes[1].nombre}: $${Exfoliantes[1].precio} (sin iva)`);
                        sumarProducto(Exfoliantes[1].precio);
                        break;
                    case 3:
                        alert(`Agregaste al carro ${Exfoliantes[2].nombre}: $${Exfoliantes[2].precio} (sin iva)`);
                        sumarProducto(Exfoliantes[2].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            case '4':
                Micelares.forEach((item) => {
                    let mensaje = `
                    ID: ${item.id}
                    Foto: ${item.foto}
                    Nombre: ${item.nombre}
                    Cantidad: ${item.cantidad}
                    Descripcion: ${item.descripcion}
                    Precio: ${item.precio}
                    Codigo: ${item.codigo}
                    `;
                    alert(mensaje);
                })
                
                let eleccion4 = parseInt(prompt("Que producto desea comprar? (1 o 2)"));

                switch(eleccion4){
                    case 1:
                        alert(`Agregaste al carro ${Micelares[0].nombre}: $${Micelares[0].precio} (sin iva)`);
                        sumarProducto(Micelares[0].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Micelares[1].nombre}: $${Micelares[1].precio} (sin iva)`);
                        sumarProducto(Micelares[1].precio);
                        break;
                    case 3:
                        alert(`Agregaste al carro ${Micelares[2].nombre}: $${Micelares[2].precio} (sin iva)`);
                        sumarProducto(Micelares[2].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            case '5':
                LocionesBrumas.forEach((item) => {
                    let mensaje = `
                    ID: ${item.id}
                    Foto: ${item.foto}
                    Nombre: ${item.nombre}
                    Cantidad: ${item.cantidad}
                    Descripcion: ${item.descripcion}
                    Precio: ${item.precio}
                    Codigo: ${item.codigo}
                    `;
                    alert(mensaje);
                })
                
                let eleccion5 = parseInt(prompt("Que producto desea comprar? (1 o 2)"));

                switch(eleccion5){
                    case 1:
                        alert(`Agregaste al carro ${LocionesBrumas[0].nombre}: $${LocionesBrumas[0].precio} (sin iva)`);
                        sumarProducto(LocionesBrumas[0].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${LocionesBrumas[1].nombre}: $${LocionesBrumas[1].precio} (sin iva)`);
                        sumarProducto(LocionesBrumas[1].precio);
                        break;
                    case 3:
                        alert(`Agregaste al carro ${LocionesBrumas[2].nombre}: $${LocionesBrumas[2].precio} (sin iva)`);
                        sumarProducto(LocionesBrumas[2].precio);
                        break;
                    case 4:
                        alert(`Agregaste al carro ${LocionesBrumas[3].nombre}: $${LocionesBrumas[3].precio} (sin iva)`);
                        sumarProducto(LocionesBrumas[3].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            case '6':
                HidratacionTermal.forEach((item) => {
                    let mensaje = `
                    ID: ${item.id}
                    Foto: ${item.foto}
                    Nombre: ${item.nombre}
                    Cantidad: ${item.cantidad}
                    Descripcion: ${item.descripcion}
                    Precio: ${item.precio}
                    Codigo: ${item.codigo}
                    `;
                    alert(mensaje);
                })
                
                let eleccion6 = parseInt(prompt("Que producto desea comprar? (1 o 2)"));

                switch(eleccion6){
                    case 1:
                        alert(`Agregaste al carro ${HidratacionTermal[0].nombre}: $${HidratacionTermal[0].precio} (sin iva)`);
                        sumarProducto(HidratacionTermal[0].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${HidratacionTermal[1].nombre}: $${HidratacionTermal[1].precio} (sin iva)`);
                        sumarProducto(HidratacionTermal[1].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            default:
                alert("Producto inexistente");
                break;
        }
        mensaje1 = prompt("Desea comprar otro producto? (si/no)");
}}else{
    alert("Hasta pronto!")
}
if (total > 0){
    let mensaje2 = prompt("Desea eliminar algun producto? (si/no)");
    while (mensaje2.toLowerCase() === "si" && total > 0){
        let mensaje3 = parseInt(prompt("Que producto desea eliminar?"));
        eliminarProducto(mensaje3);
        mensaje2 = prompt("Desea eliminar otro producto? (si/no)")
    }
    if(total > 0){
        alert(`${nombreUsuario}, como desea abonar?`);
        let pago = prompt("1-Tarjeta de Credito\n2-Tarjeta de Debito\n3-Transferencia");
        switch(pago){
            case '1':
                let cuotas = parseInt(prompt("En cuantas cuotas desea realizar el pago?"));
                calcularCuotas(cuotas);
                break;
            case '2':
                alert("Seras redireccionado para abonar");
                break;
            case '3':
                alert("A continuacion se te daran los datos para efectuar la transferencia:");
                alert(`alias: bendita.cb.mp - CVU:000000123321654987 - monto a transferir: $${total}`);
                break;
            default:
                alert("Metodo de pago inexistente");
                break;
        }
        alert("Gracias por comprar en Bendita❣")
    }else{
        alert("No tienes productos en el carro. Hasta pronto!");
    }
    

}}

