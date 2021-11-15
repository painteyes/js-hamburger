// Hamburger menu: mostrare / nascondere il menu principale


// Per l'esercizio di oggi, la parte html/css non dovete riscriverla,
// dovete solo aggiungere la parte js per far si che il menu su mobile diventi visibile al click sull'hamburger menu :)


const hamburgerMenu = document.querySelector ('.fas');
console.log(hamburgerMenu);
const hamburgerMenuOpen = document.querySelector ('.hamburger-menu');
console.log(hamburgerMenuOpen);


hamburgerMenu.addEventListener ( 'click', 
    function() {
        hamburgerMenuOpen.style.dispaly ='block';
    }
);


const hamburgerMenuClose = document.querySelector ('.close');
console.log(hamburgerMenuClose);


hamburgerMenuClose.addEventListener ( 'click', 
    function() {
        hamburgerMenuOpen.style.dispaly ='none';
    }
);

