const contents = [
    {
        title: 'Empezando con Vue.js',
        url: './1-instancia-vue/index.html'
    },
    {
        title: 'Renderizado de listas: v-for',
        url: './2-v-for/index.html'
    },
    {
        title: 'Renderizado condicional: v-if v-else',
        url: './3-v-if-v-else/index.html'
    },
    {
        title: 'Manejando Interacciones del Usuario',
        url: './4-v-on/index.html'
    },
    {
        title: 'Métodos',
        url: './5-methods/index.html'
    },
    {
        title: 'Atributos dinámicos: v-bind',
        url: './6-v-bind/index.html'
    },
    {
        title: 'Clases dinámicas',
        url: './7-dynamic-classes/index.html'
    },
    {
        title: 'Propiedades computadas / Computed properties',
        url: './8-computed-properties/index.html'
    },
    {
        title: 'Componentes',
        url: './9-components/index.html'
    },
    {
        title: 'Componentes Props - Emit',
        url: './10-components-props-emit/index.html'
    },
    {
        title: 'Todo App',
        url: './todo-app/index.html'
    },
]

// Función para dibujar nuestro Navbar
const drawNavbar = () => {
    // Debido a que utilizo la extension Live Server de VSCode
    // Obtengo el pathname de mi sitio
    const currentLocation = document.location.pathname;
    // Verifico si estoy abriendo el archivo desde un servidor de Live Server o desde un archivo.
    const isMainPage = currentLocation == "/vue/" || currentLocation.split("/vue/")[1] == "index.html";
    const nav = document.getElementById('navbar');
    if (nav) {
        nav.innerHTML =
            `<a class="navbar-brand mr-auto mr-lg-0" href="${isMainPage ? '' : '../index.html'}">Intro Vuejs</a>
            <a class="navbar-brand" href="https://es.vuejs.org/v2/guide/index.html" target="_blank">Documentación</a>`
    }
    nav.className = "navbar navbar-dark bg-dark";
}

const drawContents = () => {
    const main = document.getElementById('main');
    // Valido que exista el elemento main en mi HTML
    if (main) {
        main.innerHTML =
            `<div class="my-3 bg-white rounded shadow-sm">
                <h6 class="border-bottom border-gray p-3 mb-0">Contenidos</h6>
                ${ getContents() }
            </div>`
    }
}

const getContents = () => {
    return contents.map((item, i) => {
        return `<div class="media ${i % 2 != 0 ? 'bg-light' : ''}">
                <p class="media-body p-3 mb-0 small lh-125 border-bottom border-gray">
                    <a href="${item.url}"><strong class="d-block text-muted">${item.title}</strong></a>
                </p>
            </div>`
    }).join('');
}

drawNavbar();
drawContents();

if (document.getElementById("app")) document.getElementById("app").className = "container";