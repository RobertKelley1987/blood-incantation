import { data } from './data.js';
import { Menu } from './Menu.js';

window.addEventListener('DOMContentLoaded', () => {
    // compile handlebars template and add to home page
    const tourDateTemplate = document.getElementById('tour-date-template').innerHTML;
    const compiledTourDateTemplate = Handlebars.compile(tourDateTemplate);
    document.getElementById('tour-dates').innerHTML = compiledTourDateTemplate(data);

    const mobileMenu = new Menu();
    mobileMenu.addEvents();
});
