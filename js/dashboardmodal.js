import { viewProd } from "./functions/viewImgProd.js";
import { viewListPedidos } from "./functions/viewListPedidos.js";
import { viewProds } from "./functions/viewProds.js";
import { viewUsers } from "./functions/viewUsers.js";



document.addEventListener("DOMContentLoaded", e => {
  const $dialog = document.querySelector("dialog");
  viewProd($dialog);
  viewUsers();
  viewProds();
  viewListPedidos();
});