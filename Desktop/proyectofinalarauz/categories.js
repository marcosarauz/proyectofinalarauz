
let titulo = document.getElementById('titulo');

titulo.innerHTML = "AQUI ENCONTRARAS TODAS LAS PELICULAS QUE ESTAN EN PROMOCION"


const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className ='navbar';

const links = [
    {
        link: "index",
        name: "inicio"
    },
    {
        link: "categorias",
        name: "categorias"
    }

]


for (const link of links){
    const li =document.createElement('li');
    li.className = 'pagos'
    li.innerHTML = `<a href="${link.link.toLowerCase()}.html">${link.name}</a>`;
    ul.appendChild(li);
    
}

const peliculas = [
    {
        categoria: "fantasia",
        ranking: 1,
        peliculamasvista: "deedpol"
    },
    {
        categoria: "accion",
        ranking: 2,
        peliculamasvista: "bad boys"
    },
    {
        categoria: "romance",
        ranking: 3,
        peliculamasvista: "romper el circulo"
    },
    {
        categoria: "comedia",
        ranking: 4,
        peliculamasvista: "un espia y medio",
    },
    {
        categoria: "terror",
        ranking: 5,
        peliculamasvista: "el conjuro"
        
    }
    
]

function imprimirpeliculas(peliculas){
    const contenedor = document.getElementById("contenedor");
    for (const pelicula of peliculas){
        const card = document.createElement("div");
        card.innerHTML =`
        <h2>${pelicula.categoria}</h2>
        <h3>${pelicula.ranking}</h3>
        <h3>${pelicula.peliculamasvista}</h3>
        <button id="${pelicula.categoria}${pelicula.id}">AGREGAR</button>
        `
        contenedor.appendChild(card)

        const boton = document.getElementById(`${pelicula.categoria}${pelicula.id}`)

        boton.addEventListener("click", () => agregaralcarrito(pelicula))
        
    }
    
}

imprimirpeliculas(peliculas)

const carrito = JSON.parse(localStorage.getItem("carrito")) || []

if (carrito.length > 0) {
    imprimircarritoenhtml (carrito);
}


const botonid = document.getElementById('botondos');

const button = document.createElement('button');
button.style.cursor = "pointer"
button.style.fontSize = "20px"

button.textContent = "OBTENER PELICULAS"

botonid.append(button);

button.addEventListener('click', () => {
    Swal.fire({
        title: "Usted a obtenido la pelicula",
        text: "",
        icon: "success"
      });
})

let abajo = document.getElementById('footer');

footer.innerHTML= "© 2024 TODOS LOS DERECHOS RESERVADOS"