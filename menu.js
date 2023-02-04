function openMenu (menuOpen, header, body) {
    menuOpen = true;
    header.classList.add('open-menu');
    body.style.position = 'fixed';
}

function closeMenu (menuOpen, header, body) {
    menuOpen = false;
    header.classList.remove('open-menu');
    body.style.position = 'unset';
}


export function addMenuEvents () {
    let menuOpen = false;
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const body = document.querySelector('body');

    const mediaQuery = window.matchMedia('(min-width: 550px)');
    mediaQuery.addEventListener('change', e => {
        if(e.matches && menuOpen) {
            closeMenu(menuOpen, header, body);
        }
    });

    hamburger.addEventListener('click', () => {
        menuOpen ? closeMenu(menuOpen, header, body) : openMenu(menuOpen, header, body);
    });
}