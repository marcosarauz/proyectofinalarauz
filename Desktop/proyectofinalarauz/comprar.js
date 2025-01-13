
let titulo = document.getElementById('titulo');

titulo.innerHTML = "AQUI ENCONTRARAS LAS PELICULAS DISPONIBLES PARA COMPRAR"




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
        link: "categories",
        name: "categorias"
    },
    {
        link:"comprar",
        name:"compras"
    }

]


for (const link of links){
    const li =document.createElement('li');
    li.className = 'pagos'
    li.innerHTML = `<a href="${link.link.toLowerCase()}.html">${link.name}</a>`;
    ul.appendChild(li);
    
}



const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listapeliculas = document.querySelector('#lista-peliculas');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    listapeliculas.addEventListener('click', agregarpeli);

    carrito.addEventListener('click', eliminarpeli);

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];

        carritoHTML();
    })


    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; 

        limpiarHTML();
    })
}

function agregarpeli(e) {
    e.preventDefault();


    if( e.target.classList.contains('agregar-carrito') ) {
        const peliseleccionado = e.target.parentElement.parentElement;
        leerDatospeli(peliseleccionado);
    }
    
}
function eliminarpeli(e) {
    if(e.target.classList.contains('borrar-peli')) {
        const peliId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter( peli => peli.id !== peliId );

        carritoHTML(); 
    }
}
function leerDatospeli(peli) {
    const infopeli = {
        imagen: peli.querySelector('img').src,
        titulo: peli.querySelector('h4').textContent,
        precio: peli.querySelector('.precio span').textContent, 
        id: peli.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    } 

    const existe = articulosCarrito.some( peli => peli.id === infopeli.id  );
    if(existe) {
        const pelis = articulosCarrito.map( peli => {
            if( peli.id === infopeli.id ) {
                peli.cantidad++;
                return peli;
            } else {
                return peli;
            }
        } );
        articulosCarrito = [...pelis];
    } else {
        articulosCarrito = [...articulosCarrito, infopeli];
    }



    carritoHTML();
}

function carritoHTML() {

    limpiarHTML();
    
    articulosCarrito.forEach( peli => {
        const { titulo, precio, cantidad, id } = peli;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-peli" data-id="${id}" > X </a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function limpiarHTML() {


    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
