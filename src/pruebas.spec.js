const totalizador = require("./totalizador.js");


describe("Totalizador", () =>{
  it("Si genero la cantidad, me genera la cantidad ejemplo: generar(1) => 1", () => {
    let totalizar = new totalizador(1);
    expect(totalizar.get_cantidad()).toEqual(1);
  });
  it("Si genero el precio, me genera el precio ejemplo: generar(20) => 20", () => {
    let totalizar = new totalizador(5,20);
    expect(totalizar.get_precio()).toEqual(20);
  });
  it("Si genero el estado, me genera el estado ejemplo: generar(NV) => NV", () => {
    let totalizar = new totalizador(5,20,"NV");
    expect(totalizar.get_estado()).toEqual("NV");
  });
  it("Calculamos el precio neto, ejemplo: generar(20, 3, NV) => 60", () => {
    let totalizar = new totalizador(20, 3,"NV");
    expect(totalizar.get_precio_neto()).toEqual(60);
  });
  it("Calculamos el impuesto de UT , ejemplo: generar(1000, 3, UT) => 0.665", () => {
    let totalizar = new totalizador(30000, 3,"UT");
    expect(totalizar.get_impuesto()).toEqual(0.0665);
  });
  it("Calculamos el impuesto de NV , ejemplo: generar(1000, 3, NV) => 0.08", () => {
    let totalizar = new totalizador(30000, 3,"NV");
    expect(totalizar.get_impuesto()).toEqual(0.08);
  });
  it("Calculamos el impuesto de TX , ejemplo: generar(1000, 3, TX) => 0.0625", () => {
    let totalizar = new totalizador(30000, 3,"TX");
    expect(totalizar.get_impuesto()).toEqual(0.0625);
  });
  it("Calculamos el impuesto de AL , ejemplo: generar(1000, 3, AL) => 0.04", () => {
    let totalizar = new totalizador(30000, 3,"AL");
    expect(totalizar.get_impuesto()).toEqual(0.04);
  });
  it("Calculamos el impuesto de CA , ejemplo: generar(1000, 3, CA) => 0.0825", () => {
    let totalizar = new totalizador(30000, 3,"CA");
    expect(totalizar.get_impuesto()).toEqual(0.0825);
  });
  it("Calculamos el total solo con impuestos , ejemplo: generar(20, 3, TX) => ", () => {
    let totalizar = new totalizador(20, 3,"TX");
    expect(totalizar.get_total()).toEqual(63.75);
  });
  it("Calculamos el precio total restandole el descuento de 1000 unidades., ejemplo: generar(1000, 3, TX) => ", () => {
    let totalizar = new totalizador(1000, 3,"TX");
    expect(totalizar.get_total()).toEqual(3097.5);
  });
  it("Calculamos el precio total restandole el descuento de 3000 unidades., ejemplo: generar(3000, 3, TX) => ", () => {
    let totalizar = new totalizador(3000, 3,"TX");
    expect(totalizar.get_total()).toEqual(9112.5);
  });
  it("Calculamos el precio total restandole el descuento de 7000 unidades., ejemplo: generar(7000, 3, TX) => ", () => {
    let totalizar = new totalizador(7000, 3,"TX");
    expect(totalizar.get_total()).toEqual(20842.5);
  });
  it("Calculamos el precio total restandole el descuento de 10000 unidades., ejemplo: generar(10000, 3, TX) => ", () => {
    let totalizar = new totalizador(10000, 3,"TX");
    expect(totalizar.get_total()).toEqual(28875);
  });
  it("Calculamos el precio total restandole el descuento de 30000 unidades., ejemplo: generar(30000, 3, TX) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX");
    expect(totalizar.get_total()).toEqual(82125);
  });
  it("Calculamos el impuesto adicional para la categoria varios, ejemplo: generar(30000, 3, TX, Varios) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Varios");
    expect(totalizar.get_impuesto_adicional()).toEqual(0);
  });
  it("Calculamos el impuesto adicional para la categoria Alimentos, ejemplo: generar(30000, 3, TX, Alimentos) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Alimentos");
    expect(totalizar.get_impuesto_adicional()).toEqual(0);
  });
  it("Calculamos el impuesto adicional para la categoria Bebidas alcoholicas, ejemplo: generar(30000, 3, TX, Bebidas alcoholicas) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Bebidas alcoholicas");
    expect(totalizar.get_impuesto_adicional()).toEqual(0.07);
  });
  it("Calculamos el impuesto adicional para la categoria Material de escritorio, ejemplo: generar(30000, 3, TX, Material de escritorio) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Material de escritorio");
    expect(totalizar.get_impuesto_adicional()).toEqual(0);
  });
  it("Calculamos el impuesto adicional para la categoria Muebles, ejemplo: generar(30000, 3, TX, Muebles) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Muebles");
    expect(totalizar.get_impuesto_adicional()).toEqual(0.03);
  });
  it("Calculamos el impuesto adicional para la categoria Electronicos, ejemplo: generar(30000, 3, TX, Electronicos) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Electronicos");
    expect(totalizar.get_impuesto_adicional()).toEqual(0.04);
  });
  it("Calculamos el impuesto adicional para la categoria Vestimenta, ejemplo: generar(30000, 3, TX, Vestimenta) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Vestimenta");
    expect(totalizar.get_impuesto_adicional()).toEqual(0.02);
  });
  it("Calculamos el precio total con el impuesto adicional, ejemplo: generar(20, 3, TX, Vestimenta) => ", () => {
    let totalizar = new totalizador(20, 3,"TX","Vestimenta");
    expect(totalizar.get_total()).toEqual(64.95);
  });
  it("Calculamos el descuento adicional para la categoria Alimentos, ejemplo: generar(30000, 3, TX, Alimentos) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Alimentos");
    expect(totalizar.get_descuento_adicional()).toEqual(0.02);
  });
  it("Calculamos el descuento adicional para la categoria Bebidas alcoholicas, ejemplo: generar(30000, 3, TX, Bebidas alcoholicas) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Bebidas alcoholicas");
    expect(totalizar.get_descuento_adicional()).toEqual(0);
  });
  it("Calculamos el descuento adicional para la categoria Material de escritorio, ejemplo: generar(30000, 3, TX, Material de escritorio) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Material de escritorio");
    expect(totalizar.get_descuento_adicional()).toEqual(0.015);
  });
  it("Calculamos el descuento adicional para la categoria Muebles, ejemplo: generar(30000, 3, TX, Muebles) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Muebles");
    expect(totalizar.get_descuento_adicional()).toEqual(0);
  });
  it("Calculamos el descuento adicional para la categoria Electronicos, ejemplo: generar(30000, 3, TX, Electronicos) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Electronicos");
    expect(totalizar.get_descuento_adicional()).toEqual(0.01);
  });
  it("Calculamos el descuento adicional para la categoria Vestimenta, ejemplo: generar(30000, 3, TX, Vestimenta) => ", () => {
    let totalizar = new totalizador(30000, 3,"TX","Vestimenta");
    expect(totalizar.get_descuento_adicional()).toEqual(0);
  });
});