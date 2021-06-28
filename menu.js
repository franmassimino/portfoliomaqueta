let abrirMenu = document.getElementById("abrir")
let cerrarMenu = document.getElementById("cerrar")
let menuOverlay = document.getElementById("menu-overlay")
let menuItem = document.getElementsByClassName("item")
let home = document.getElementById("home")

abrirMenu.addEventListener('click', () => {
  menuOverlay.classList.add("abierto")
})

cerrarMenu.addEventListener('click', () => {
  menuOverlay.classList.remove("abierto")
})

for (let i = 0 ; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', e => {
    menuOverlay.classList.remove("abierto")
  })
}

home.addEventListener('click', (e) => {
  e.preventDefault()
})



