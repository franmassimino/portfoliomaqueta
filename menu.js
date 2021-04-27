let abrirMenu = document.getElementById("abrir");
let cerrarMenu = document.getElementById("cerrar");
let menuOverlay = document.getElementById("menu-overlay");

abrirMenu.addEventListener('click', () => {
  menuOverlay.classList.add("abierto")
})

cerrarMenu.addEventListener('click', () => {
  menuOverlay.classList.remove("abierto");
})
