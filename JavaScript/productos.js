const limpiadores = [
    {id: 1, foto: "/img/Gentle Milk Cleanser" ,nombre: "Gentle Milk Cleanser", cantidad: 190, descripcion: "Leche limpiadora suavizante", precio: 2900, codigo: 10058},
    {id: 2, foto: "/img/Alpine Roses Cleanser Emulsion", nombre: "Alpine Roses Cleanser Emulsion", cantidad: 100, descripcion: "Suave microemulsion de limpieza que desmaquilla y limpia con rapidez", precio: 2850, codigo: 19198},
    {id: 3, foto: "/img/Vitamin C Cleanser",  nombre: "Vitamin C Cleanser", cantidad: 180, descripcion: "Gel limpiador espumante para rostro y cuerpo", precio: 2140, codigo: 12601},
    {id: 4, foto: "/img/Gentle Milk Cleanser",  nombre: "Gentle Milk Cleanser REFILL", cantidad: 175, descripcion: "Leche limpiadora suavizante", precio: 2330, codigo: 10323},
];

const Esponjas = [
    {id: 1, foto: "/img/Conjac Sponge" ,nombre: "Conjac Sponge", cantidad: 1, descripcion: "Esponja facial elaborada con pura fibra vegetal de alta pureza y cenizas activas de Bambu Natural.", precio: 1800, codigo: 10477},
    {id: 2, foto: "/img/Compressed Sponge" ,nombre: "Compressed Sponge", cantidad: 12, descripcion: "Esponjas comprimidas para retirar productos de higiene con mayor practicidad.", precio: 1200, codigo: 10453},
]

const exfoliantes = [
    {id: 1, foto: "/img/Alpine Roses Scrub" ,nombre: "Alpine Roses Scrub", cantidad: 60, descripcion: "Crema exfoliante para una limpieza profunda de la piel", precio: 1910, codigo: 18900},
    {id: 2, foto: "/img/Exfolianting Scrub" ,nombre: "Exfolianting Scrub", cantidad: 215, descripcion: "Gel exfoliante purificante.", precio: 2540, codigo: 13837},
    {id: 3, foto: "/img/Pro Reti-C Scrub" ,nombre: "Pro Reti-C Scrub", cantidad: 250, descripcion: "Crema exfoliante antiedad de uso facial y corporal.", precio: 3990, codigo: 16821},
];

const micelares = [
    {id: 1, foto: "/img/Bi-Phase Micellar Water" ,nombre: "Bi-Phase Micellar Water", cantidad: 195, descripcion: "Agua micelar bifasica.", precio: 2510, codigo: 13868},
    {id: 2, foto: "/img/3 in 1 Micellar Water" ,nombre: "3 in 1 Micellar Water", cantidad: 220, descripcion: "Agua micelar triple accion: desmaquilla, limpia y refresca.", precio: 2720, codigo: 13844},
    {id: 3, foto: "/img/Alpine Roses Make Up Remover" ,nombre: "Alpine Roses Make Up Remover", cantidad: 60, descripcion: "Formula bifasica que remueve facilmente el maquillaje, inclusive el que es a prueba de agua, sin agredir la piel de los ojos y los labios.", precio: 1990, codigo: 11023},
];

const locionesBrumas = [
    {id: 1, foto: "/img/Hyaluronic B5 Bio-Osmotic Lotion" ,nombre: "Hyaluronic B5 Bio-Osmotic Lotion", cantidad: 100, descripcion: "Locion hidratante osmoprotectora.", precio: 3200, codigo: 18269},
    {id: 2, foto: "/img/Vitamin C All-Day Radiance Lotion" ,nombre: "Vitamin C All-Day Radiance Lotion", cantidad: 100, descripcion: "Locion revitalizante y bioestimulante.", precio: 2750, codigo: 19433},
    {id: 3, foto: "/img/Alpine Roses Brume" ,nombre: "Alpine Roses Brume", cantidad: 100, descripcion: "Bruma antiage ideal para pieles delicadas o sensibles.", precio: 2780, codigo: 18887},
    {id: 4, foto: "/img/Zenskin S.O.S Rescue Brume" ,nombre: "Zenskin S.O.S Rescue Brume", cantidad: 100, descripcion: "Bruma calmante de rescate..", precio: 2720, codigo: 12341},
];

const HidratacionTermal = [
    {id: 1, foto: "/img/Thermal New Rich" ,nombre: "Thermal New Rich", cantidad: 50, descripcion: "Crema termal rica. Textura cremosa y emoliente.", precio: 3000, codigo: 13943},
    {id: 2, foto: "/img/Thermal New Light" ,nombre: "Thermal New Light", cantidad: 50, descripcion: "Crema termal ligera. Textura crema gel ultraliviana.", precio: 3000, codigo: 13967},
];

/* let contenedor1 = document.getElementById("limpiadores");
Limpiadores.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <img src="${item.foto}" alt="" width="80px">
    <p>Nombre: ${item.nombre}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>Descripcion: ${item.descripcion}</p>
    <b>$${item.precio}</b>
    <p>Codigo: ${item.codigo}</p>
    <hr />
    `;
    
    contenedor1.appendChild(div);
    alert(div);
});

let contenedor2 = document.getElementById("esponjas");
Esponjas.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <img src="${item.foto}" alt="" width="80px">
    <p>Nombre: ${item.nombre}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>Descripcion: ${item.descripcion}</p>
    <b>$${item.precio}</b>
    <p>Codigo: ${item.codigo}</p>
    <hr />
    `;

    contenedor2.appendChild(div);
});

let contenedor3 = document.getElementById("exfoliantes");
Micelares.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <img src="${item.foto}" alt="" width="80px">
    <p>Nombre: ${item.nombre}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>Descripcion: ${item.descripcion}</p>
    <b>$${item.precio}</b>
    <p>Codigo: ${item.codigo}</p>
    <hr />
    `;

    contenedor3.appendChild(div);
});

let contenedor4 = document.getElementById("micelares");
Micelares.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <img src="${item.foto}" alt="" width="80px">
    <p>Nombre: ${item.nombre}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>Descripcion: ${item.descripcion}</p>
    <b>$${item.precio}</b>
    <p>Codigo: ${item.codigo}</p>
    <hr />
    `;

    contenedor4.appendChild(div);
});

let contenedor5 = document.getElementById("locionesBrumas");
LocionesBrumas.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <img src="${item.foto}" alt="" width="80px">
    <p>Nombre: ${item.nombre}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>Descripcion: ${item.descripcion}</p>
    <b>$${item.precio}</b>
    <p>Codigo: ${item.codigo}</p>
    <hr />
    `;

    contenedor5.appendChild(div);
});

let contenedor6 = document.getElementById("hidratacionTermal");
HidratacionTermal.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <img src="${item.foto}" alt="" width="100px">
    <p>Nombre: ${item.nombre}</p>
    <p>Cantidad: ${item.cantidad}</p>
    <p>Descripcion: ${item.descripcion}</p>
    <b>$${item.precio}</b>
    <p>Codigo: ${item.codigo}</p>
    <hr />
    `;

    contenedor6.appendChild(div);
}); 
*/