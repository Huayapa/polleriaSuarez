import { viewProd } from "./viewImgProd.js";

export function viewListPedidos() {
  const $dialog = document.querySelector("dialog");
  // FUNCION DE BOTON PARA LA LISTA DE PEDIDOS
  const $btnslist = document.querySelectorAll(".btnlist");
    
  $btnslist.forEach(btnlist => {
    btnlist.addEventListener("click", e => {
      // e.preventDefault();
      $dialog.innerHTML = `
        <div class="card_info">
          <h2>Pedido: Josue Andres</h2>
          <span>21/02/2025</span>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Pollo 1/4</td>
                    <td>Gaseosa pequeña, ensalada</td>
                    <td>2</td>
                    <td>S/ 12</td>
                    <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Chaufa</td>
                    <td>Gaseosa 2L</td>
                    <td>2</td>
                    <td>S/ 12</td>
                    <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Gaseosa Inka Kola</td>
                    <td>Gaseosa Inka Kola</td>
                    <td>1</td>
                    <td>S/ 4</td>
                    <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
                </tr>
            </tbody>
          </table>
        <button class="btnclosed" onClick="this.parentElement.close()">X</button>
      `;
      $dialog.showModal();
      viewProd($dialog);
    })
  })
}