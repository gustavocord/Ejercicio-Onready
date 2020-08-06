  
module.exports= class Vehiculo {
    constructor(marca, modelo, precio) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
    }


    getMarca(){
        return this.marca;
    }
    getModelo(){
        return this.modelo;
    }

    getPrecio(){
        return Number(this.precio.toFixed(2));
    }

}