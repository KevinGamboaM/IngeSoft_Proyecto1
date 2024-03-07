module.exports = class totalizador{
    constructor(cantidad, precio, estado, categoria, peso, cliente){
        this.cantidad = cantidad;
        this.precio = precio;
        this.estado = estado;
        this.categoria = categoria;
        this.peso = peso;
        this.cliente = cliente;
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
    get_categoria(){
        return this.categoria;
    }
    get_peso(){
        return this.peso;
    }
    get_cliente(){
        return this.cliente;
    }
    get_precio_neto(){
        return this.cantidad * this.precio;
    }
    get_impuesto(){
        var a = 0;
        if(this.estado == "UT"){
            a = 0.0665;
        }else if(this.estado=="NV"){
            a = 0.08;
        }else if(this.estado=="TX"){
            a = 0.0625; 
        }else if(this.estado=="AL"){
            a = 0.04; 
        }else if(this.estado=="CA"){
            a = 0.0825; 
        }               
        return a;

    }
    get_descuento(){
        if(this.cantidad>=1000 && this.cantidad < 3000){
            return 0.03;
        }else if(this.cantidad>=3000 && this.cantidad < 7000){
            return 0.05;
        }else if(this.cantidad>=7000 && this.cantidad < 10000){
            return 0.07;
        }else if(this.cantidad>=10000 && this.cantidad < 30000){
            return 0.1;
        }else if(this.cantidad>=30000){
            return 0.15;
        }else{
            return 0;
        }          

    }
    get_impuesto_adicional(){
        if(this.categoria == "Bebidas alcoholicas"){
            return 0.07;
        }else if(this.categoria == "Muebles"){
            return 0.03;
        }else if(this.categoria == "Electronicos"){
            return 0.04;
        }else if(this.categoria == "Vestimenta"){
            return 0.02;
        }
        return 0;
    }
    get_descuento_adicional(){
        if(this.categoria == "Alimentos"){
            return 0.02;
        }else if(this.categoria == "Material de escritorio"){
            return 0.015;
        }else if(this.categoria == "Electronicos"){
            return 0.01;
        }
        return 0;
    }
    get_costo_envio(){
        if(this.peso<=10){
            return 0;
        }if(this.peso<=20){
            return 3.5;
        }if(this.peso<=40){
            return 5;
        }if(this.peso<=80){
            return 6;
        }if(this.peso<=100){
            return 6.5;
        }if(this.peso<=200){
            return 8;
        }
        return 9;
    }
    get_descuento_costo_envio(){
        if(this.cliente=="Recurrente"){
            return 0.005;
        }else if(this.cliente=="Antiguo Recurrente"){
            return 0.01;
        }else if(this.cliente=="Especial"){
            return 0.015;
        }
        return 0;
    }
    get_descuento_tipo_cliente(){
        if(this.cliente=="Recurrente" && this.get_precio_neto()>3000 && this.categoria == "Alimentos"){
            return 100;
        }else if(this.cliente=="Especial" && this.get_precio_neto()>7000 && this.categoria == "Electronicos"){
            return 200;
        }
        return 0;
    }
    
    
    get_total(){
        return (this.get_precio_neto()-(this.get_precio_neto()*this.get_descuento()))
        + (this.get_precio_neto()*this.get_impuesto())
        + (this.get_precio_neto()*this.get_impuesto_adicional())
        -(this.get_precio_neto()*this.get_descuento_adicional())
        +(this.get_costo_envio()*this.get_cantidad())
        -(this.get_costo_envio()*this.get_cantidad()*this.get_descuento_costo_envio())
        -this.get_descuento_tipo_cliente();
    }
  
}
  