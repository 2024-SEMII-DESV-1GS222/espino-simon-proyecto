import { APIController } from './apiController.js'
import { sanitizeName } from './utils.js'
import { printResultExplore } from './show.js'

const htmlElements = {
    exploreForm: document.querySelector('#explore-form'),
    exploreResult: document.querySelector('#explore-result')
}

const handlers = {
    submit: async (e) => {
        e.preventDefault();
        console.log('escuchado');
        const formData = new FormData(e.target);
        const query = formData.get('query');
        const sanitizedName = sanitizeName(query);
        if (!sanitizedName) {
            alert('Por favor, ingrese un nombre válido');
            return;
        };

        const searchBy = formData.get('search-by');
        const data = await APIController.search(query, searchBy);
        if (!data) {
            alert('No se ha encontrado');
            return;
        }
        htmlElements.exploreResult.innerHTML = '';

        const results = data[`${searchBy}s`].items;
        console.log('Resultados encontrados:', results);

        const output = printResultExplore(results, searchBy);
        htmlElements.exploreResult.innerHTML = output;

    }
}

const bindEvents = () => {
    htmlElements.exploreForm.addEventListener('submit', handlers.submit);
}

const init = () => {
    bindEvents();
}

init();