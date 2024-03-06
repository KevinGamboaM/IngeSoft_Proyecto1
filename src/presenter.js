import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
  

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const cant = Number.parseInt(cantidad.value);
  
  const totalizar = new totalizador(cantidad.value);
  
  div.innerHTML = "<p>Cantidad: " + totalizar.get_cantidad() + "</p>";
  
  
});
