import { viewProd } from "./viewImgProd.js";

export function viewProds() {
  // FUNCION DE BOTON PARA VER LOS PRODUCTOS}
  const $dialog = document.querySelector("dialog");
  const $btnsprods = document.querySelectorAll(".btnprod");
  
  $btnsprods.forEach(btnprod => {
    btnprod.addEventListener("click", e => {
      // e.preventDefault();
      $dialog.innerHTML = `
        <div class="card_info">
          <h2>Todos los productos</h2>
        </div>
        <table>
          <tr>
              <th>Id</th>
              <th>Nombre</th> 
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th></th>
          </tr>
          <tr>
              <td>1</td>
              <td>Pollo 1/4</td>
              <td>Gaseosa pequeña, ensalada</td>
              <td>1203</td>
              <td>S/ 12</td>
              <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
              <td><button class="btn-red">Editar</button></td>
          </tr>
          <tr>
              <td>2</td>
              <td>Pollo familiar</td>
              <td>Gaseosa pequeña, ensalada</td>
              <td>234</td>
              <td>S/ 32</td>
              <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
              <td><button class="btn-red">Editar</button></td>
          </tr>
          <tr>
              <td>3</td>
              <td>Chaufa</td>
              <td>Gaseosa 2L</td>
              <td>23</td>
              <td>S/ 12</td>
              <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
              <td><button class="btn-red">Editar</button></td>
          </tr>
          <tr>
              <td>4</td>
              <td>Gaseosa Inka Kola</td>
              <td>Gaseosa Inka Kola</td>
              <td>21</td>
              <td>S/ 4</td>
              <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
              <td><button class="btn-red">Editar</button></td>
          </tr>
          <tr>
              <td>5</td>
              <td>Torta de chocolate</td>
              <td>Vaso de agua</td>
              <td>21</td>
              <td>S/ 5</td>
              <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
              <td><button class="btn-red">Editar</button></td>
          </tr>
          <tr>
              <td>6</td>
              <td>Torta de chocolate</td>
              <td>Vaso de agua</td>
              <td>21</td>
              <td>S/ 5</td>
              <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
              <td><button class="btn-red">Editar</button></td>
          </tr>
          <tr>
              <td>7</td>
              <td>Torta de chocolate</td>
              <td>Vaso de agua</td>
              <td>21</td>
              <td>S/ 5</td>
              <td><button class="btn-dark imgbtn" data-image="assets/img/polloprod.jpg">Ver</button></td>
              <td><button class="btn-red">Editar</button></td>
          </tr>
        </table>
        <button class="btnclosed" onClick="this.parentElement.close()">X</button>
      `;
      $dialog.showModal();
      viewProd($dialog);
    })
  })
}