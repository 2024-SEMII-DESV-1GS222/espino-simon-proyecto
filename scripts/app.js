import { getAuthorizationUrl } from './login.js';
import { APIController } from './apiController.js'
import { sanitizeName } from './utils.js'
import { printResultExplore } from './show.js'

const htmlElements = {
    exploreForm: document.querySelector('#explore-form'),
    exploreResult: document.querySelector('#explore-result'),
    btnLogin: document.querySelector('#login')
}

const handlers = {
    submit: async (e) => {
        e.preventDefault();
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

        const output = printResultExplore(results, searchBy);
        htmlElements.exploreResult.innerHTML = output;
    },
    login: () => {
        const authUrl = getAuthorizationUrl();
        window.location.href = authUrl;
    }
}

const bindEvents = () => {
    if (htmlElements.exploreForm)
        htmlElements.exploreForm.addEventListener('submit', handlers.submit);
    if (htmlElements.btnLogin)
        htmlElements.btnLogin.addEventListener('click', handlers.login);
}

const init = () => {
    bindEvents();
}

init();