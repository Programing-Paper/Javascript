//hola compañero
/**Tipos de datos*/
console.log(27);
console.log(27.56);
console.log("hola buenas tardes");
console.log("hola buenas noches");

// valores logicos- boleanos
console.log(true);
console.log(false);

/**indefinido underfined */
console.log(undefined);

// null
console.log(null);

// tipos de datos estructurales
//objeto - object

console.log({
  nombre: "Sergio",
  edad: 27,
  fechadenacimiento: null,
  esAlto: false,
});

//tipo de dato de tipo lista - array
console.log(["Colombia", "venezuela", "ecuador"]);

console.log([21, true, { nombre: "sergio" }, [1, 2, 3, 4, 5, 6]]);

/* variables */
var miVariable = "Esta es una variable";
console.log(miVariable);

/* asignar varibles */
var a = 10;
var b = 10 * a;
console.log(a);
console.log(b);

/* sumas, restas, multiplicacion */

producto = 6 / 69;
console.log(producto);

/* operadores de asignacion */
var x = 2;
var y = true;
/* operador de aignacion de adicion += */

var componente = "cadena de teto";
componente = "cadena de texto";
console.log(componente);

/* cadena de asignacion de exponensiacion */
var x = 5;
var y = 10;
x **= y;
console.log(x);

const numero = 9.5;
console.log(numero);

/* Arreglos en javascript */

var miArreglo = [10, 20, 30];
console.log(miArreglo[0]);
var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);

/* Operadores Logicos  AND, */

console.log(true && true);
console.log(2 > 3 && 1 <= 2);

/* OR */

console.log(true || false);
console.log(false || false);
console.log(true || true);

/* negacion de un valor NOT */

console.log(!true);
console.log(!false);

/* concatenacion con el simbolo de + */

var nombre = "gabriel";
var apellido = "arguello";
var nombreApellido = nombre + " " + apellido;
console.log(nombreApellido);

/* condicionales ? vol1 : vol2 */
console.log(2 > 3 ? "Es mayor" : "Es menor");

/* Operador de desestructuracion */
var persona = {
  nombre: "gabriel",
  apellido: "castro",
};

var { nombre: xyz, apellido } = persona;
console.log(xyz);
console.log(apellido);
console.log(persona);

var persona = {
  nombre: "gabriel",
  apellido: "castro",
};

var { nombre } = persona;
console.log(nombre);
console.log(persona);

/* operador de desestructuracion para arreglos */
var arreglo = [1, 2, 3, 4, 5];

var [primero, segunda] = arreglo;
console.log(primero);
console.log(segunda);

/* notacion punto */

var persona = {
  nombre: "liniana",
  apellido: "campestre",
};

console.log(persona.nombre);
console.log(persona.apellido);

/* notaciones por corchetes */
var persona = {
  nombre: "liniana",
  apellido: "campestre",
};
console.log(persona["nombre"]);

/* notaciones por corchetes en arreglos */

var arreglo = [21, 22, 23, 24, 25, 26];
console.log(arreglo[0]);

// Operacion de determinacion de tipo (typeof)

console.log(typeof "liniana");
console.log(typeof true);

/* Escribir un programa que calcule el numero de segundos que existen en un dia */

var calculo = 60 * 60;
console.log(calculo);

var resultado = calculo * 24;
console.log(resultado);

/* calcular rectangulo */

var ancho = 2;
var alto = 5;

console.log(ancho * alto);

// conversor de grados centigrados a fahrenheit

var calculo = (9 * 9) / 5 + 32;
console.log(calculo);

/* Aprendizaje profundo */

function esMenorQue(a, b) {
  return a < b;
}

console.log(esMenorQue(3, 6));

// si es menor que sero el balor sera indefined

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(-25));

var conteo = 0;

function contarCartas(carta) {
  var decision;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++;
      break;
    case 10:
    case "J":
    case "O":
    case "K":
    case "A":
      conteo--;
      break;
  }
  if (conteo > 0 ) {
    decision = "Apostar";
  } else {
    decision = "Esperar";
  }

  return conteo + " " + decision;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));





