export class Menu {
    constructor() {
        this.isOpen = false;
        this.burger = document.getElementById('hamburger');
    }

    open () {
        this.isOpen = true;
        document.getElementById('header').classList.add('open-menu');
        document.querySelector('body').style.position = 'fixed';
    }
    
    close () {
        this.isOpen = false;
        document.getElementById('header').classList.remove('open-menu');
        document.querySelector('body').style.position = 'unset';
    }
    

    addEvents () {
        this.burger.addEventListener('click', () => this.isOpen ? this.close() : this.open());
        const mediaQuery = window.matchMedia('(min-width: 550px)');
        mediaQuery.addEventListener('change', e => e.matches && this.close());
    }
}