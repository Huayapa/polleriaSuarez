document.addEventListener("DOMContentLoaded", e => {

  // FUNCION DE BOTON PARA VER LA IMAGEN DE PRODUCTO
  const $btnsImages = document.querySelectorAll(".imgbtn");
  const $main = document.querySelector("dialog");
  $btnsImages.forEach(btnimage => {
    btnimage.addEventListener("click", e => {
      const url = btnimage.dataset.image;
      $main.innerHTML = `
        <img src="${url}">
        <button onClick="this.parentElement.close()">X</button>
      `;
      $main.showModal();
    })
  })
  // FUNCION DE BOTON PARA VER LOS PRODUCTOS
  // FUNCION DE BOTON PARA VER LOS USUARIOS
  // FUNCION DE BOTON PARA LA LISTA DE PEDIDOS


});