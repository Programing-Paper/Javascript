console.log ("Hola Mundo");

// Metodo pop

var estaciones;
var estacion;

estaciones = ["Invierno","Otoño","Primavera","Verano"];

 estacion = estaciones.pop();

console.log(estaciones);
console.log(estacion);

/* Metodo Shift */

var estaciones;

estaciones = ["Invierno","Otoño","Primavera","Verano"];

estaciones.shift();
console.log(estaciones);

// Metood unshift

estaciones = ["Invierno","Otoño","Primavera","Verano"];

estaciones.unshift("calido");

console.log(estaciones);

// Lista de compras

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5],
["refresco", 7], ["pollo", 7]];

//cereal
console.log("voy a comprar" + miListaDeCompras[0][1] + "unidades de ."
 + miListaDeCompras[0][0] + ".");

// leche 
console.log("voy a comprar" + miListaDeCompras[1][1] + "unidades de ."
 + miListaDeCompras[1][0] + ".");

 //Galletas 
 console.log("voy a comprar" + miListaDeCompras[2][1] + "unidades de ."
 + miListaDeCompras[2][0] + ".");

 // pan

 console.log("voy a comprar" + miListaDeCompras[3][1] + "unidades de ."
  + miListaDeCompras[3][0] + ".");

  // refresco

console.log("voy a comprar" + miListaDeCompras[4][1] + "unidade de ."
 + miListaDeCompras[4][0] + ".");


// funciones -> Funtion 

function sumar(a, b) {
    var suma = a + b;
    console.log("el resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 3);
sumar(8, 9);
sumar(2, 4);
sumar(5, 5);    

function sumar(a, b) {
    var suma = a + b;
    console.log("el resultado de " + a + " + " + b + " es: " + suma);
}

var x = 5;
var y = 3;

sumar(x, y);

function concatenarTresCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 + ' ' + cadena2 + " " + cadena3);
}   

concatenarTresCadenas("Estoy", "aprendiendo", "a programar");

// Ambito global

function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableLocal);

// return

function sumar (a, b) {
      return a + b;
}

console.log(sumar(5, 3));


function crearCadenaConMeta(LenguajeDeProgramacion){
    return "Mi meta es aprender" + lenguajeDeProgramacion;
}
    
var miMeta = crearCadenaConMeta("JavaScript");

console.log(miMeta);

function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento); // Agregar al final del arreglo.
    return arreglo.shift(); // Remover el primer Elemento.
}

var miArreglo = [1,2,3,4,5];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo));



