import totalizador from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const cliente = document.querySelector("#cliente");
const peso = document.querySelector("#peso");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");  
const div3 = document.querySelector("#resultado-div3");
const div4 = document.querySelector("#resultado-div4");  
const div5 = document.querySelector("#resultado-div5");  
const div6 = document.querySelector("#resultado-div6");  

form.addEventListener("submit", (event) => {
  event.preventDefault();

 
  
  const totalizar = new totalizador(cantidad.value, precio.value, estado.value, categoria.value, peso.value, cliente.value);

  div.innerHTML = "<p>Cantidad: " + totalizar.get_cantidad() + " | Precio: " + totalizar.get_precio() + " | Estado: " + totalizar.get_estado() + " | Categoria: " + totalizar.get_categoria() + " | Peso: " + totalizar.get_peso() + " | Tipo de cliente: " + totalizar.get_cliente() + "</p>";
  div2.innerHTML = "<p>Precio neto: " + totalizar.get_precio_neto() + "</p>";
  div3.innerHTML = "<p>Impuesto para " + totalizar.get_estado() + "(" + (totalizar.get_impuesto()*100) + "%)-->" + totalizar.get_precio_neto()*totalizar.get_impuesto() + "</p>";
  div5.innerHTML = "<p>Descuento(" + parseInt(totalizar.get_descuento()*100) + "%)" + totalizar.get_precio_neto() * totalizar.get_descuento() + "</p>";
  div6.innerHTML = "<p>Impuesto adicional para " + totalizar.get_categoria() + "(" + parseInt(totalizar.get_impuesto_adicional()*100) + "%)-->" + totalizar.get_precio_neto()*totalizar.get_impuesto_adicional()
                   + "╠══╣  Descuento adicional(" + (totalizar.get_descuento_adicional()*100) + "%)" + totalizar.get_precio_neto() * totalizar.get_descuento_adicional() 
                   + "╠══╣  Costo de envio("+totalizar.get_costo_envio()+"$):"+ totalizar.get_cantidad()*totalizar.get_costo_envio() +"</p>";
  div4.innerHTML = "<p>PRECIO TOTAL: " + totalizar.get_total() + "</p>";
  
});
