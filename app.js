function triggerNavMenu(x) {
    x.classList.toggle("change");
    document.getElementById("responsive-nav").classList.toggle("show");
    document.getElementById("body").classList.toggle("body-resp");
    document.getElementById("layer").classList.toggle("show");
}