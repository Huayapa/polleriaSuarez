export function viewUsers() {
  // FUNCION DE BOTON PARA VER LOS USUARIOS
  const $btnsusers = document.querySelectorAll(".btnuser");
  const $dialog = document.querySelector("dialog");
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
}