const cantidad = document.querySelector("#cantidad");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
  

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  
  div.innerHTML = "<p>Cantidad: " + cant +"</p>";
  
});
