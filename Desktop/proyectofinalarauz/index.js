const cabecera = document.getElementById('section');
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

const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const boton = document.getElementById("boton");


showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
    
        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    }); 
});
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});



let abajo = document.getElementById('footer');

footer.innerHTML= "© 2024 TODOS LOS DERECHOS RESERVADOS"