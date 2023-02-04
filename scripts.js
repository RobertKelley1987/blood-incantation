import { data } from './data.js';
import { addMenuEvents } from './menu.js';

window.addEventListener('DOMContentLoaded', () => {
    // compile handlebars template and add to home page
    const tourDateTemplate = document.getElementById('tour-date-template').innerHTML;
    const compiledTourDateTemplate = Handlebars.compile(tourDateTemplate);
    document.getElementById('tour-dates').innerHTML = compiledTourDateTemplate(data);

    addBurgerEvents();
});
