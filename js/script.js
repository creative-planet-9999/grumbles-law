var elem = document.getElementById('hamburger-menu');
elem.addEventListener('touchstart', toggleMenu);
elem.addEventListener('click', toggleMenuDesktop);

function toggleMenu (){
    [].forEach.call(document.querySelectorAll('.header-menu'), function(el){ el.classList.toggle('hidden'); });
    elem.removeEventListener('click', toggleMenuDesktop);
}
function toggleMenuDesktop (){
    [].forEach.call(document.querySelectorAll('.header-menu'), function(el){ el.classList.toggle('hidden'); });
    elem.removeEventListener('touchstart', toggleMenu);
}
