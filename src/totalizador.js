module.exports = class totalizador{
    constructor(cantidad, precio){
        this.cantidad = cantidad;
        this.precio = precio;
    
    }
  
    get_cantidad(){
        return this.cantidad
    }


    get_precio(){
        return this.precio;
    }
  
}
  