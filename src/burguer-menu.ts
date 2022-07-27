function toggleBurguer() {
    let menu = document.querySelector("#navbar__menu") as HTMLElement;
    let navbar = document.querySelector(".navbar") as HTMLElement;
    if (menu.classList.contains('navbar__menu__hidden')) {
        menu.classList.remove('navbar__menu__hidden');
        navbar.style.marginBottom = '8rem';
    }
    else {
        menu.classList.add('navbar__menu__hidden');
        navbar.style.marginBottom = '0';
    }
}
window.addEventListener("load", function () {
    document.querySelector("#navbar__menu__icon").addEventListener('click', toggleBurguer);
});
