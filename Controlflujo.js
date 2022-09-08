// Cntrol de flujo

/* Estructura IF */

if(condicion) {

}

var llueve = true;
if (llueve) {
    console.log('Necesito una sombrilla.');
}

var administrador = true;
if (administrador) {
    console.log('Bienvenido al sistema');
}

var administrador = 'administrador';
if (administrador === 'administrador')  {
    console.log('bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18;
var  edadPersona = 18;

if ( edadPersona >= MAYORIA_DE_EDAD) {
   console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}   

var semaforo = 'otoño'
if (semaforo === 'verde') {
    console.log('Arranca');
} else if (semaforo === 'amarillo') {
    console.log('listo?');
} else if (semaforo === 'rojo') {
    console.log('Motores Apagados');
} else {
    console.log('color no identificado');
}

// switch

switch (Expresion) {
    case expresion:
     // Codigo
     break;
    case expresion:
     // Codigo
     break
    default:
       console.log('este caso se cumple si ninguno de los anteriores cumple la expresion');
}

var producto = 'papaya';
switch (producto) {
    case 'papaya':
    case 'melones':
        console.log('las papayas y melones cuentan $5 cada una');
     break;
    case 'tomates':
     console.log('los tomates subieron $4usd');
     break
    case 'naranjas':
        console.log('las narajas cuentas $5usd');
    break
    default:
       console.log('no disponemos de las frutas');
}

/* Ejersicios propuestos en el curso */

var calculeday = 'Viernes'
if (calculeday === 'Lunes') {
    console.log('Monday');
} else if (calculeday === 'Martes') {
    console.log('Tuesday');
} else if (calculeday === 'Miercoles') {
    console.log('Wednesday');
} else if (calculeday === 'Jueves') {
    console.log('Thursday');
} else if (calculeday === 'Viernes') {
    console.log('Friday');
} else if (calculeday === 'Sabado') {
    console.log('Saturday');
} else if (calculeday === 'Domingo') {
    console.log('Friday');
} else {
    console.log('el dia no esta en los dias de la semana');
}
 
var daycalculation = 'Domingo'
switch (daycalculation) {
    case 'Lunes':
     console.log('Monday');
     break;
    case 'Martes':
     console.log('Tuesday');
     break
    case 'Miercoles':
        console.log('Wenesday');
      break
    case 'Jueves':
        console.log('Thursday');
    break
    case 'Viernes':
        console.log('Friday');
    break
    case 'Sabado':
        console.log('Saturday');
    break
    case 'Domingo':
     console.log('Sunday');
    break
    default:
       console.log('dia incorrecto');
}

/* definir un programa segun el total de compra */

const totalVentas = 20;
var compraCliente = 5;

if (totalVentas <=  compraCliente){
    console.log('tu compra paso los $10 no cobraremos tu envio');
} else {
    console.log('tu compra es menor a $20 cobraremos tu envio $5');
}


const precioTotal = 20;
var  compraTotal = 9;

if (compraTotal <= precioTotal) {
    console.log('costo de envio $5');
}else if (compraTotal >= 10, compraTotal < precioTotal) {
    console.log('costo de envio $5usd');
} else if (compraTotal < 10) {
    console.log('no se le cobrara el envio');
} else {
    console.log('costo de envio $0');
}


// Ejersicio Propuesto --

const precioMax = 50;
var precioMin = 20;
var precioCompra = 5;
if (precioCompra > precioMax){
    console.log('no pagara envio');
} else if (precioCompra < precioMin){
    console.log('no pagara envio');
} else if (precioCompra > precioMin, precioCompra <= precioMax){
    console.log('el precio de envio es $7');
} else {
    console.log('numero es incorrecto');
}

// Problema por resolver! /

const valorMax = 20;
var valorMin = 10;
var compraValor = 10;

switch (compraValor) {
    case: '10' '9': 
    console.log('tiene un descuento de $5');
    break;
    case: '20': 
    console.log('tiene un descuento de $5')
    break;
    default:
        console.log('No tiene descuento');
}

// Operador While 

var contador = 0;
while (contador <= 100) {
    console.log('Hola mundo!!!');
    contador += 1;
}

// Operador do while 

var contador = 11;

do {
    console.log('Hola Mundo');
    contador <= 1   
} while (contador <= 10);

// for ( exprecion inicial, expresionCondicional, expresionDeActualizacion)

for (let contador = 0; contador <= 5; contador++) {
    console.log('Hola Mundo');
}
// se tiende poner Index en el cluclo for representado con la i

for (let i = 0; i <= 5; i ++) {
    console.log('Hola Mundo');
}

// For IN for( variable operadorIN objeto) 

var persona = {
    nombre: 'Sergio',
    apellido: 'Andres',
    edad: 27
}

for (let clave in persona)  {
    console.log(clave, persona[clave]);
}

// for - of 

var arreglo = [1,2,3,4,5];
var nombre = 'Sergio';
for (let valor of nombre) {
    console.log(valor);
}

// Ejersicio multiplicaciones 2 al 12, anidamiento!

const result = '=';
entero = 1;
for(let multip = 2; multip * entero, entero <= 12; entero++){
    console.log(multip, entero, result, multip * entero);
}

// Realice el equivalente con la declaracion while y do-while

const multip = 2;
var igual = '=';
var entero = 1
while (entero <= 12){
    console.log(multip, entero, igual, multip * entero);
    entero += 1;
}

// tabla de verdad para el operador not !X

// !(a > 5) --> !true --> false 

var a = 8;

console.log(!(a > 5));

// !(a < 5) --> !false --> true

console.log(!(a < 5));


// declarativo

// funtions nombre de la funcion() {--> Cuarpo de la funcion}

function saludar() {
    console.log('buenas tardes compañeros');
}

saludar();

function saludar(nombre) {
    console.log(`hola soy ${nombre}`);
}

saludar('Sergio');
// -------------------------

function saludar(nombre) {
    return `hola soy ${nombre}`
}
var saludo = saludar('Sergio');
console.log(saludo);
console.log(saludar('Sergio Andres'));

// expresion o anonimos
var suma = function(a, b) {
    return a * b;
}

console.log(suma(2, 8));

// Arrow Function
var multiplicar = (a, b) => a * b;
console.log(multiplicar(2 , 7));


var resta = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
    } else {
        return 'Solo puede restar numeros';
    }   
}

console.log(resta(4, '2'));

var multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 2));    

// Manipulacion Arreglos en javascript
// ForEach
// podemos utilizar la propiadad for y ciclos en los arrelos
// contar los elementos del arreglo | -->

var letras = ['a', 'b', 'c', 'd', 'e']; 
console.log(letras.length);

for (let i = 0; i < letras.length; i++) {
    const element = letras[i];
    console.log(element);
}

// foreach nos permite recorrer los elementos de un arreglo

letras.forEach((elemento) => {
    console.log(elemento);
})

/* tambien podemos imprimir esto para simplificar el codigo */

letras.forEach((elemento) => console.log(elemento));

//manipular los arreglos mediante javascript -push , pop, shift son funciones mutables!

// push es para agregar elementos al final del arreglo

var letras = ['a', 'b', 'c', 'd', 'e']; 
letras.push('f');
console.log(letras);

// shift obtiene el primer elementox y va a modificar la variable letras

var letras = ['a', 'b', 'c', 'd', 'e']; 
letras.shift();
console.log(letras);

// tambien se puede retornar elvalor obtenido

var letras = ['a', 'b', 'c', 'd', 'e']; 
var primerElemento = letras.shift()
console.log(primerElemento);

// pop ontiene el ultimo elemento del arreglo

var letras = ['a', 'b', 'c', 'd', 'e']; 
letras.pop();
console.log(letras);

//tambien puede retornar el ultimo elemento

var letras = ['a', 'b', 'c', 'd', 'e']; 
var ultimoElemento = letras.pop()
console.log(ultimoElemento);

// Elemento Map en javascript es el mas utilizado
// es unmutable va a tranformar un arreglo pero nos va a devolver un nuevo arreglo
// map tambien resive una funcion como parametro.

var estudiantes = ['Dayana', 'Pamela', 'Liliana', 'katrina'];
var asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        Asistencia: false
    }
})
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

// map debe retornar el elemento modificado 

// las arrow funtion tienen implicitamente el return por eso retorna el string con el punto

var estudiantes = ['Dayana', 'Pamela', 'Liliana', 'katrina'];
var asistencia = estudiantes.map((nombre) => `${nombre}.`)

console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

// map 2 agregar nuevo precio dentro del producto
// en el map debe ser retornado en cada iteracion


var productos = [
    { nombre: 'camisetas' , precio: 15 },
    { nombre: 'zapatos' , precio: 20 },
    { nombre: 'pantalon' , precio: 25 }
]

var productosImpuestos = productos.map((producto) => {
    producto.impuesto = .12;
    return producto
})

console.log(producto);
console.log(productosImpuestos);


/* spreed operator: ... */ //nos ayuda a expandir el objeto producto dentro del nuevo objeto

/* del objeto producto va coger unicamente las propiedades y las agrega en el nuevo objeto */

var productos = [
    { nombre: 'camisetas' , precio: 15 },
    { nombre: 'zapatos' , precio: 20 },
    { nombre: 'pantalon' , precio: 25 }
]

var productosImpuestos = productos.map((producto) => {
    return {
        ...producto,
        impuesto: .12
    }
})

console.log(productos);
console.log(productosImpuestos);

// obtener solo el precio del map

var productos = [
    { nombre: 'camisetas' , precio: 15 },
    { nombre: 'zapatos' , precio: 20 },
    { nombre: 'pantalon' , precio: 25 }
]

var precios = productos.map((producto) => producto.precio)

console.log(precios);

// no es recomendado retornar el producto poq esta siendo referencia al mismo objeto del array

// Propiedad filter, es un elemento inmutable 
/* nos ayuda a filtrar elementos dentro de un arreglo en base a una condicion
que debe devolver un valor logico */

var estudiantes = [
    { nombre: 'Ada', edad: 20, matriculado: true },
    { nombre: 'eliana', edad: 28, matriculado: true },
    { nombre: 'camila', edad: 19, matriculado: false },
    { nombre: 'gabriel', edad: 45, matriculado: true },
    { nombre: 'gustavo', edad: 25, matriculado: false },
]

/* debe retornar la condicional */
// si la cantidad de registros es elevada es mejor hacer un filtrado para buscar desde la base de datos por lo que se va a tardar
// estos metodos son una iteracion, va recorriendo cada elemenento del arreglo para ver si cumple sierta condicion

var filtrado = estudiantes.filter((estudiante) => estudiante.edad >= 21 && estudiante.matriculado);
console.log(estudiantes);
console.log(filtrado);

// Manipulacion de arreglos --> reduce nos va a reducir todo el array a un solo valor,
/*  este puede ser de tipo numerico, texto, objeto, arreglos */

/* reduce --> resive dos parametros, la primera es una funcion
 la segunda un estado inicial del acumulador */

 var calificaciones = [3, 5, 9, 10, 10];
 var suma = calificaciones.reduce((acumulador, calificaciones) => acumulador + calificaciones, 0);
 console.log(calificaciones);
 console.log(suma);
 console.log(suma / calificaciones.length);

// segundo ejemplo reduce 
// debemos retornar el acumulador de lo contrario no funcionara

 var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];

 var resultado = edades.reduce((acumulador, edad) =>{
    if (!acumulador[edad]) {
       acumulador[edad] = 1
    } else {
        acumulador[edad] += 1
    }
    return acumulador 
 }, {})   

 console.log(edades);
 console.log(resultado);

 //tercer ejemplo reduce
 /* calcular el total de dinero por compra */

var ventas = [
    { nombre: 'camiseta', precio: 15, totalVendido: 10 },
    { nombre: 'zapatos', precio: 150, totalVendido: 8 },
    { nombre: 'pantalon', precio: 20, totalVendido: 30 },
]

var resultado = ventas.reduce((acumulador, producto) => {
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = totalVentas;  
    return acumulador;
}, {})


console.log(ventas);        
console.log(resultado);     

// podemos encadenar estos elementos siempre y cuando lo que retorne cada uno sea un iterabble
/* es decir map esta retornando un array que se puede iterar y el le va a pasar ese 
valor a reduce */

var estudiantes = [
    { nombre: 'Ada', edad: 20, matriculado: true },
    { nombre: 'eliana', edad: 28, matriculado: true },
    { nombre: 'camila', edad: 19, matriculado: false },
    { nombre: 'gabriel', edad: 45, matriculado: true },
    { nombre: 'gustavo', edad: 25, matriculado: false },
]
// estructura 

var resultado = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce((acumulador, item) => {
    if( item) {
        acumulador.matriculado += 1
    } else {
        acumulador.noMatriculado += 1
    }
    return acumulador;
  }, { matriculado: 0, noMatriculado: 0 })


  console.log(estudiantes);
  console.log(resultado);

  // la propiedad flat saca los arrays o erreglos que enten dentro del arreglo y lo aplana 
  // incicando cuantas veses estan adentro.


   const concatenacion = [[1, 2, 3] [4, 7] [6, 7[ 5, 6]]];    

   console.log(concatenacion);


   // some --> nos va ayudar a verificar si almenos uno cumple con una condicion espesifica
   // si la cumple va retornar un valor boleano true o false!

   var numeros = [1,2,3,4,5,6,7,8,0,10];
   var resultado = numeros.some((numero) => numero % 2 === 0);
   console.log(resultado);

   var numeros = [1,3,5,7,9,];
   var resultado = numeros.some((numero) => numero % 2 === 0);
   console.log(resultado);


   /* every --> nos va a retornar un valor logico si todos los elementos de un arrelo
   cumplen con la condicion que espesificamos. */
   // imprime false porque no todos los elementos cumplen con la condicion

  var numeros = [1,2,3,4,5,6,7,8,0,10];
  var resultado = numeros.every((numero) => numero % 2 === 0);
  console.log(resultado);

  // manupulacion de arreglos - find, findIndex
  /* find se va a encargar de buscar sierto elemento que coincida con cierta condicion
  y nos lo vaa retornar */
  /* la diferencia al filter, find nos va a retornar un unico elemento mientras que filter 
  nos va a retornar un array con los elementos que coincidan en la busqueda */

   var clientes = [
    { id: 1, nombre: 'adila' },
    { id: 2, nombre: 'karina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' }, 
    { id: 5, nombre: 'camila' }
   ]

   var cliente = clientes.find((cliente) => cliente.id === 1);
   console.log(clientes);
   console.log(clientes);
   
   

  /* findIndex en base a una condicion nos va a retornar la posicion del elemento en el 
  arreglo */
  
  var clientes = [
    { id: 1, nombre: 'adila' },
    { id: 2, nombre: 'karina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' }, 
    { id: 5, nombre: 'camila' }
   ]

    var posicion = clientes.findIndex((cliente) => cliente.id === 2);
    console.log(posicion);


  // elemento includes no resive una funcion como parametro sino el valor espesifico de lo que queremos buscar.
 /* include tambien trabaja con los strings y podemos ver si esta incluyendo algun caracter o letras. */

 var mascotas = ['perro','gato','conejo'];
 var resultado = mascotas.includes('gato')
 console.log(resultado);

 console.log('sergio'.includes('e'));

var buscador = (parametro) => {
    let clientes = [
        { id: 1, nombre: 'adila' },
        { id: 2, nombre: 'karina' },
        { id: 3, nombre: 'Dayana' },
        { id: 4, nombre: 'Pamela' }, 
        { id: 5, nombre: 'camila' }
       ]
       return clientes.filter((cliente) => cliente.nombre.includes(parametro))
}

console.log(buscador('na'));

/* manupulacion de arreglos Join nos va ayudar a unir todos los elementos del arreglo y crear
un strings apartir de esa union. */
// join puede o no resivir parametros!

 var elementos = ['aire', 'fuego', 'Agua'];
 var resultado = elementos.join('--');
 console.log(resultado);


/* Join no puede converir un array de objetos a un string separado por comas, podemos ayudarle
con el map. */
// el csv va a contener unicamente los datos, generalmente 

 var clientes = [
    { id: 1, nombre: 'adila' },
    { id: 2, nombre: 'karina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' }, 
    { id: 5, nombre: 'camila' }
   ]

   console.log(clientes.join());  

/* archivo CSV */
/* object.values, nos va ayudar a obtener unicamente los valores de un objeto. 
resive los parametros del objeto que quieres obtener los valores */

var csvGenerator = (array, ) => {
    let data = array.map((element) => Object.values();
}
console.log(Object.values({ id: 5, nombre: 'camila'}));


var clientes = [
    { id: 1, nombre: 'adila' },
    { id: 2, nombre: 'karina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' }, 
    { id: 5, nombre: 'camila' }
   ]

var csvGenerator = (array, separator=',') => {
    let data = array.map((element) => Object.values(element).join(separator))
    data.forEach(element => console.log(element))
}   

csvGenerator(clientes);

// la funcion object.keys nos va a retornar en cambio las claves del objeto 
var clientes = [
    { id: 1, nombre: 'adila' },
    { id: 2, nombre: 'karina' },
    { id: 3, nombre: 'Dayana' },
    { id: 4, nombre: 'Pamela' }, 
    { id: 5, nombre: 'camila' }
   ]

var csvGenerator = (array, separator=',') => {
    let headers = Object.keys(array[0]).join(separator)
    let data = array.map((element) => Object.values(element).join(separator))
    console.log(headers);
    data.forEach(element => console.log(element))
}   

csvGenerator(clientes);

// Metodo concat -> manupulacion de arreglos
/* este metodo va a generar un nuevo arreglo apartir de los 2 con los que va a trabajar */
// esto tambien lo podemos hacer con spred operator

var array1 = [1,2,3,4,5,6];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2);
var array4 = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Sort --< es un metodo de ordenamiento dentro de javascript
/* Los va ordenas deacuerdo al codigo asky */

var array1 = [1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses = ['Dic', 'Ene', 'Mar', 'Feb'];
console.log(meses.sort());

/* en base a la resta el va a saber cual es el numero mayor entre a y b, 
para hacerlo hacendiente ponemos b - a */

var array = [1, 10000, 21, 30, 4];
var ordenado = array.sort((a, b) => a - b)
console.log(ordenado);


// Metodo splice --> Nos va ayudar a modificar elementos dentro de un arreglo, splice es mutable
/* splice el primer parametro que escribimos es para indicar la posicion y el segundo el numero
de elementos que queremos eliminar y el tercero es para remplazar por el eliminado*/

var nombres = ['Gabriel', 'Geovanny', 'Dayana'];
nombres.splice(1, 1, 'Sergio')
console.log(nombres);


/* Metodo slice nos va a retornar una copia mas pequeña del array, slice va a resivir dos
parametros el primero es el parametro de inicio que es desde donde quieres cortar el arreglo
y el segundo es la posicion final asta donde quieres cortar el arreglo*/
// slice tambien es inmulatble.

var nombres = ['Gabriel', 'Geovanny', 'Dayana'];
var resultado = nombres.slice(1, 2); // no incluye la ultima posicion
console.log(resultado);
console.log(nombres);