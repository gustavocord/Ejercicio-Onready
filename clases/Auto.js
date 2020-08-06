const Vehiculo=require('./Vehiculo');

module.exports= class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
      super(marca, modelo, precio);
      this.puertas = puertas;
    }

    getPuertas(){
        return this.puertas;
    }

   
}

