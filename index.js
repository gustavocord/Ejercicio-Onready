const Vehiculo=require('./clases/Vehiculo');
const Auto=require('./clases/Auto');
const Moto=require('./clases/Moto');

var moto1 = new Moto ("Honda","Titan","125c",60.000,00);
var moto2 = new Moto ("Yamaha","YBR","160c",80.500,00);
var auto1 = new Auto ("Peugeot","206","4",200.000,00);
var auto2 = new Auto ("Peugeot","208","5",250.000,00);
var vehiculos= [moto1,moto2,auto1,auto2] ;

// usamos instanceof para imprimir dependiendo si es un objeto de tipo auto o moto
vehiculos.forEach(function(item) {
    if (item instanceof Auto === true) {
      console.log("Marca: " + item.marca + " // " + "Modelo: " + item.modelo + " // " + "Puertas: " +"$"+ item.puertas + " // " + "Precio: " + item.precio);
    } else {
      console.log("Marca: " + item.marca + " // " + "Modelo: " + item.modelo + " // " + "Cilindrada: " + "$"+ item.cilindrada + " // " + "Precio: " + item.precio);
    };
  });
  
  console.log("==============================");



  //metodos 
function masCaro(lista){
    var maximo=0 ;
    var aux =0;
    for(let i = 0; i <  lista.length; i++){
   
        if(lista[i].getPrecio() > maximo ){
                 aux  = lista[i];
                maximo = lista[i].getPrecio();
        
    }
  }
  return console.log("Vehículo más caro: " + aux.getMarca() + " " + aux.getModelo());

} 

function masBarato(v){
    var menor=v[0] ;
   
    for(let i = 0; i <  v.length; i++){
   
        if(v[i].getPrecio() < menor ){
    
                menor = v[i].getPrecio();
        
        }
        
  }
  return console.log("Vehículo más barato: " + menor.getMarca() + " " + menor.getModelo());

} 


// recorro la lista de los vehiculos y verifico con el metodo includes si tiene la letra Y LA MARCA

function letra(l){
    var aux
    for (let i = 0; i <l.length; i++){
        if(l[i].getMarca().includes("Y")){
          aux = l[i];
        }
    }
    return console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + aux.getMarca() + " " + aux.getModelo() + " $" + aux.getPrecio());
}

function ordenamiento(arr) {//marca y modelo ordenados en un nuevo array
    nuevoArray = arr;
    nuevoArray.sort(function (a, b) {
        return b.getPrecio() - a.getPrecio();
    });
    console.log("Vehículos ordenados por precio de mayor a menor:");
    arr.forEach(element => {
        console.log(element.getMarca() ,element.getModelo());
    });
}



masCaro(vehiculos);
masBarato(vehiculos);
letra(vehiculos);
console.log("=============================");

//ordenados = vehiculos.sort(((a, b) => b.getPrecio - a.getPrecio));




ordenamiento(vehiculos);