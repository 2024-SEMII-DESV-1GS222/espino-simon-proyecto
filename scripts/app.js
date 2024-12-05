import { APIController } from './apiController.js'
import { sanitizeName } from './utils.js'

const $ = document.querySelector;

const htmlElements = {
    btnSubmit: $('.btn-submit')
}

const handlers = {
    submit: async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const sanitizedName = sanitizeName(name);
        if (!sanitizedName) {
            alert('Por favor, ingrese un nombre válido');
            return;
        };

    }
}

const bindEvents = () => {
    htmlElements.btnSubmit.addEventListener('submit', handlers.submit);
}

const init = () => {
    bindEvents();
}

init();