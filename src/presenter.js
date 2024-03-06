import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");  

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const est = estado.value;
  
  const totalizar = new totalizador(cantidad.value, precio.value, estado.value);

  div.innerHTML = "<p>Cantidad: " + totalizar.get_cantidad() + " | Precio: " + totalizar.get_precio() + " | Estado: " + totalizar.get_estado() + "</p>";
  div2.innerHTML = "<p>Precio neto: " + totalizar.get_precio_neto() + "</p>";
  
});
