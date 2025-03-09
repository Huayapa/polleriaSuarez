export function viewProd($dialog) {
  // FUNCION DE BOTON PARA VER LA IMAGEN DE PRODUCTO
  const $btnsImages = document.querySelectorAll(".imgbtn");
  $btnsImages.forEach(btnimage => {
    btnimage.addEventListener("click", e => {
      const url = btnimage.dataset.image;
      $dialog.innerHTML = `
        <img src="${url}">
        <button class="btnclosed" onClick="this.parentElement.close()">X</button>
      `;
      $dialog.showModal();
    })
  })
}