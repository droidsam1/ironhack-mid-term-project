function toggleBurguer() {
    var menu = document.querySelector("#navbar__menu");
    if (menu.classList.contains('navbar__menu__hidden')) {
        menu.classList.remove('navbar__menu__hidden')
    }
    else {
        menu.classList.add('navbar__menu__hidden');
    }
}
window.addEventListener("load", function () {
    document.querySelector("#navbar__menu__icon").addEventListener('click', toggleBurguer);
});
