const Productos = [
    {id: 1, foto: "/img/Gentle Milk Cleanser.jpg" ,nombre: "Gentle Milk Cleanser", cantidad: 190, descripcion: "Leche limpiadora suavizante", precio: 2900, codigo: 10058, categoria: '1'},
    {id: 2, foto: "/img/Alpine Roses Cleanser Emulsion.jpg", nombre: "Alpine Roses Cleanser Emulsion", cantidad: 100, descripcion: "Suave microemulsion de limpieza que desmaquilla y limpia con rapidez", precio: 2850, codigo: 19198, categoria: '1'},
    {id: 3, foto: "/img/Vitamin C Cleanser.jpg",  nombre: "Vitamin C Cleanser", cantidad: 180, descripcion: "Gel limpiador espumante para rostro y cuerpo", precio: 2140, codigo: 12601, categoria: '1'},
    {id: 4, foto: "/img/Gentle Milk Cleanser.jpg",  nombre: "Gentle Milk Cleanser REFILL", cantidad: 175, descripcion: "Leche limpiadora suavizante", precio: 2330, codigo: 10323, categoria: '1'},
    {id: 5, foto: "/img/Conjac Sponge.png" ,nombre: "Conjac Sponge", cantidad: 1, descripcion: "Esponja facial elaborada con pura fibra vegetal de alta pureza y cenizas activas de Bambu Natural.", precio: 1800, codigo: 10477, categoria: '2'},
    {id: 6, foto: "/img/Compressed Sponge.png" ,nombre: "Compressed Sponge", cantidad: 12, descripcion: "Esponjas comprimidas para retirar productos de higiene con mayor practicidad.", precio: 1200, codigo: 10453, categoria: '2'},
    {id: 7, foto: "/img/Alpine Roses Scrub.bmp" ,nombre: "Alpine Roses Scrub", cantidad: 60, descripcion: "Crema exfoliante para una limpieza profunda de la piel", precio: 1910, codigo: 18900, categoria: '3'},
    {id: 8, foto: "/img/Exfolianting Scrub.bmp" ,nombre: "Exfolianting Scrub", cantidad: 215, descripcion: "Gel exfoliante purificante.", precio: 2540, codigo: 13837, categoria: '3'},
    {id: 9, foto: "/img/Pro Reti-C Scrub.bmp" ,nombre: "Pro Reti-C Scrub", cantidad: 250, descripcion: "Crema exfoliante antiedad de uso facial y corporal.", precio: 3990, codigo: 16821, categoria: '3'},
    {id: 10, foto: "/img/Bi-Phase Micellar Water.bmp" ,nombre: "Bi-Phase Micellar Water", cantidad: 195, descripcion: "Agua micelar bifasica.", precio: 2510, codigo: 13868, categoria: '4'},
    {id: 11, foto: "/img/3 in 1 Micellar Water.jpg" ,nombre: "3 in 1 Micellar Water", cantidad: 220, descripcion: "Agua micelar triple accion: desmaquilla, limpia y refresca.", precio: 2720, codigo: 13844, categoria: '4'},
    {id: 12, foto: "/img/Alpine Roses Make Up Remover.bmp" ,nombre: "Alpine Roses Make Up Remover", cantidad: 60, descripcion: "Formula bifasica que remueve facilmente el maquillaje, inclusive el que es a prueba de agua, sin agredir la piel de los ojos y los labios.", precio: 1990, codigo: 11023, categoria: '4'},
    {id: 13, foto: "/img/Hyaluronic B5 Bio-Osmotic Lotion.bmp" ,nombre: "Hyaluronic B5 Bio-Osmotic Lotion", cantidad: 100, descripcion: "Locion hidratante osmoprotectora.", precio: 3200, codigo: 18269, categoria: '5'},
    {id: 14, foto: "/img/Vitamin C All-Day Radiance Lotion.bmp" ,nombre: "Vitamin C All-Day Radiance Lotion", cantidad: 100, descripcion: "Locion revitalizante y bioestimulante.", precio: 2750, codigo: 19433, categoria: '5'},
    {id: 15, foto: "/img/Alpine Roses Brume.bmp" ,nombre: "Alpine Roses Brume", cantidad: 100, descripcion: "Bruma antiage ideal para pieles delicadas o sensibles.", precio: 2780, codigo: 18887, categoria: '5'},
    {id: 16, foto: "/img/Zenskin S.O.S Rescue Brume.bmp" ,nombre: "Zenskin S.O.S Rescue Brume", cantidad: 100, descripcion: "Bruma calmante de rescate..", precio: 2720, codigo: 12341, categoria: '5'},
    {id: 17, foto: "/img/Thermal New Rich.jpg" ,nombre: "Thermal New Rich", cantidad: 50, descripcion: "Crema termal rica. Textura cremosa y emoliente.", precio: 3000, codigo: 13943, categoria: '6'},
    {id: 18, foto: "/img/Thermal New Light.jpg" ,nombre: "Thermal New Light", cantidad: 50, descripcion: "Crema termal ligera. Textura crema gel ultraliviana.", precio: 3000, codigo: 13967, categoria: '6'},
];



function MostrarProductos(productosFiltrados){

    const listado = productosFiltrados.reduce( (acc, el) => acc +=`${el.id} - ${el.nombre} - $${el.precio} \n\n`, '');

    return listado;

    /* productosFiltrados.forEach((item) => {
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
    }) */
}

let total = 0;

const suma = (a, b) => a + b;
const iva = x => x * 0.21; 

const carrito = [];

function cargarCarrito(prod){

    carrito.push(prod);
    alert(`Agregaste al carro ${prod.nombre}: $${prod.precio} (sin iva) 🛒`);

    /* let lista = document.getElementById("lista-carrito");
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
    tabla.appendChild(fila3); */
}

function sumarProducto(precio){
    total = suma(suma(precio, iva(precio)), total);
    alert(`Total de la compra $${total}`);
}

function eliminarProducto(codigo){
    const producto = Productos.find(x => x.codigo === codigo);
    Productos.splice(Productos.indexOf(producto), 1);
    total = total - suma(producto.precio, iva(producto.precio));
    alert('Producto eliminado');
}


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
    alert("Antes de seleccionar el producto que desea comprar, ANOTE EL CODIGO")
    while(mensaje1.toLowerCase() === "si"){
        const categoria = prompt("1-Limpiadores\n2-Esponjas\n3-Exfoliantes\n4-Micelares\n5-Lociones y Brumas\n6-Hidratacion Termal");

        const CategoriaProducto = Productos.filter(p => p.categoria === categoria);
        console.log(CategoriaProducto);

        const mensaje = parseInt(prompt(`Elija un producto segun su id \n ${MostrarProductos(CategoriaProducto)}`));

        const productoEncontrado = (Productos.find(p => p.id === mensaje));

        cargarCarrito(productoEncontrado);
        sumarProducto(productoEncontrado.precio);

        /* switch(producto){
            case '1':

                var productosFiltrados = Productos.filter(product => product.categoria === producto)

                MostrarProductos(productosFiltrados);
                
                let eleccion1 = parseInt(prompt("Que producto desea comprar? (1,2,3 o 4)"));


                const productoEncontrado = (Productos.find(p => p.id === eleccion1 && p.categoria === '1'));

                if(productoEncontrado){
                    cargarCarrito(productoEncontrado);
                    sumarProducto(productoEncontrado.precio);
                }else{
                    ("Producto inexistente");
                    break; 
                }

                break;
            case '2':

                productosFiltrados = Productos.filter(product => product.categoria === producto);

                MostrarProductos(productosFiltrados);

                let eleccion2 = parseInt(prompt("Que producto desea comprar? (1 o 2)"));

                switch(eleccion2){
                    case 1:
                        //alert(`Agregaste al carro ${Productos[4].nombre}: $${Productos[4].precio} (sin iva)`);
                        sumarProducto(Productos[4].precio);
                        break;
                    case 2:
                        //alert(`Agregaste al carro ${Productos[5].nombre}: $${Productos[5].precio} (sin iva)`);
                        sumarProducto(Productos[5].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }

                break;
            case '3':
                productosFiltrados = Productos.filter(product => product.categoria === producto);

                MostrarProductos(productosFiltrados);
                
                let eleccion3 = parseInt(prompt("Que producto desea comprar? (1, 2 o 3)"));

                switch(eleccion3){
                    case 1:
                        alert(`Agregaste al carro ${Productos[6].nombre}: $${Productos[6].precio} (sin iva)`);
                        sumarProducto(Productos[6].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Productos[7].nombre}: $${Productos[7].precio} (sin iva)`);
                        sumarProducto(Productos[7].precio);
                        break;
                    case 3:
                        alert(`Agregaste al carro ${Productos[8].nombre}: $${Productos[8].precio} (sin iva)`);
                        sumarProducto(Productos[8].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }

                break;
            case '4':
                productosFiltrados = Productos.filter(product => product.categoria === producto);

                MostrarProductos(productosFiltrados);
                
                let eleccion4 = parseInt(prompt("Que producto desea comprar? (1, 2 o 3)"));

                switch(eleccion4){
                    case 1:
                        alert(`Agregaste al carro ${Productos[9].nombre}: $${Productos[9].precio} (sin iva)`);
                        sumarProducto(Productos[9].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Productos[10].nombre}: $${Productos[10].precio} (sin iva)`);
                        sumarProducto(Productos[10].precio);
                        break;
                    case 3:
                        alert(`Agregaste al carro ${Productos[11].nombre}: $${Productos[11].precio} (sin iva)`);
                        sumarProducto(Productos[11].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            case '5':
                productosFiltrados = Productos.filter(product => product.categoria === producto);

                MostrarProductos(productosFiltrados);

                let eleccion5 = parseInt(prompt("Que producto desea comprar? (1, 2, 3 o 4)"));

                switch(eleccion5){
                    case 1:
                        alert(`Agregaste al carro ${Productos[12].nombre}: $${Productos[12].precio} (sin iva)`);
                        sumarProducto(Productos[12].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Productos[13].nombre}: $${Productos[13].precio} (sin iva)`);
                        sumarProducto(Productos[13].precio);
                        break;
                    case 3:
                        alert(`Agregaste al carro ${Productos[14].nombre}: $${Productos[14].precio} (sin iva)`);
                        sumarProducto(Productos[14].precio);
                        break;
                    case 4:
                        alert(`Agregaste al carro ${Productos[15].nombre}: $${Productos[15].precio} (sin iva)`);
                        sumarProducto(Productos[15].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            case '6':
                productosFiltrados = Productos.filter(product => product.categoria === producto);

                MostrarProductos(productosFiltrados);
                
                let eleccion6 = parseInt(prompt("Que producto desea comprar? (1 o 2)"));

                switch(eleccion6){
                    case 1:
                        alert(`Agregaste al carro ${Productos[16].nombre}: $${Productos[16].precio} (sin iva)`);
                        sumarProducto(Productos[16].precio);
                        break;
                    case 2:
                        alert(`Agregaste al carro ${Productos[17].nombre}: $${Productos[17].precio} (sin iva)`);
                        sumarProducto(Productos[17].precio);
                        break;
                    default:
                        alert("Producto inexistente");
                        break;
                }
                break;
            default:
                alert("Producto inexistente");
                break;
        } */
        mensaje1 = prompt("Desea comprar otro producto? (si/no)");
}}else{
    alert("Hasta pronto!")
}
if (total > 0){
    let mensaje2 = prompt("Desea eliminar algun producto? (si/no)");
    while (mensaje2.toLowerCase() === "si" && total > 0){
        let mensaje3 = parseInt(prompt("Ingrese el codigo del producto que desee eliminar"));
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

