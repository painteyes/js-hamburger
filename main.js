// Hamburger menu: mostrare / nascondere il menu principale


// Per l'esercizio di oggi, la parte html/css non dovete riscriverla,
// dovete solo aggiungere la parte js per far si che il menu su mobile diventi visibile al click sull'hamburger menu :)


const hamburgerMenuEvent = document.querySelector ('.fas');
console.log(hamburgerMenuEvent);
const hamburgerMenu = document.querySelector ('.hamburger-menu');
console.log(hamburgerMenu);


hamburgerMenuEvent.addEventListener ( 'click', 
    function() {
        hamburgerMenu.style.dispaly ='block';
    }
);
