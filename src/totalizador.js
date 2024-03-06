module.exports = class totalizador{
    constructor(cantidad, precio, estado){
        this.cantidad = cantidad;
        this.precio = precio;
        this.estado = estado;
    
    }
  
    get_cantidad(){
        return this.cantidad
    }


    get_precio(){
        return this.precio;
    }

    get_estado(){
        return this.estado;
    }
    get_precio_neto(){
        return this.cantidad * this.precio;
    }
    get_impuesto(){
        if(this.estado == "UT"){
            return 0.0665;
        }else if(this.estado=="NV"){
            return 0.08;
        }else if(this.estado=="TX"){
            return 0.0625; 
        }else if(this.estado=="AL"){
            return 0.04; 
        }else if(this.estado=="CA"){
            return 0.0825; 
        }               

    }
    get_total(){
        return this.get_precio_neto()+(this.get_precio_neto()*this.get_impuesto());
    }
  
}
  