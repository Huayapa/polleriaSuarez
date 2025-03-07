function viewProd($dialog) {
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


document.addEventListener("DOMContentLoaded", e => {
  const $dialog = document.querySelector("dialog");
  viewProd($dialog);
  

  // FUNCION DE BOTON PARA VER LOS USUARIOS
  const $btnsusers = document.querySelectorAll(".btnuser");
  console.log($btnsusers);
  
  $btnsusers.forEach(btnuser => {
    btnuser.addEventListener("click", e => {
      // e.preventDefault();
      $dialog.innerHTML = `
        <div class="card_info">
          <h2>Usuarios</h2>
        </div>  
          <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Fecha Nacimiento</th>
                    <th>DNI</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Josue</td>
                    <td>Andres</td>
                    <td>21/02/2005</td>
                    <td>987567098</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Pepito</td>
                    <td>Perez</td>
                    <td>21/02/2005</td>
                    <td>987567098</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Yupanqui</td>
                    <td>Paupañaupa</td>
                    <td>21/02/2005</td>
                    <td>987567098</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Quispe</td>
                    <td>Quispe</td>
                    <td>21/02/2005</td>
                    <td>987567098</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Pablito</td>
                    <td>Clavito</td>
                    <td>21/02/2005</td>
                    <td>987567098</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Mamani</td>
                    <td>Hernandez</td>
                    <td>21/02/2005</td>
                    <td>987567098</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Smith</td>
                    <td>Atahualpa</td>
                    <td>21/02/2005</td>
                    <td>987567098</td>
                </tr>
            </tbody>
          </table>
        
        <button class="btnclosed" onClick="this.parentElement.close()">X</button>
      `;
      $dialog.showModal();
    })
  })
  
  
  
  // FUNCION DE BOTON PARA VER LOS PRODUCTOS
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


});