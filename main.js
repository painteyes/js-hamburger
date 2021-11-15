// Hamburger menu: mostrare / nascondere il menu principale


// Per l'esercizio di oggi, la parte html/css non dovete riscriverla,
// dovete solo aggiungere la parte js per far si che il menu su mobile diventi visibile al click sull'hamburger menu :)


const hamburgerMenu = document.querySelector ('.header-right > a');

const hamburgerMenuOpen = document.querySelector ('.hamburger-menu');

hamburgerMenu.addEventListener ( 'click', 
    function() {
        hamburgerMenuOpen.style.display = 'block';
    }
);

const hamburgerMenuClose = document.querySelector ('.close');

hamburgerMenuClose.addEventListener ( 'click', 
    function() {
        hamburgerMenuOpen.style.display ='none';
    }
);

