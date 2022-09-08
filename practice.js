

/* ciclos anidados */

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < miArreglo.length; i++) {
    var arregloAnidado = miArreglo[i]; // Arreglo
    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log(arregloAnidado[j]); //Elemento
    }     
}

/* Encontrar numero par */

function detectarPares (arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }

    return total;
}


console.log(detectarPares([5, 3, 1, 2, 4, 8]));


/* Ejercisio de Javascript */

var contactos =[
   {
     "nombre": "Nora",
     "apellido": "Nav",
     "numero": "0543236543",
     "gustos": ["Pizza", "Programacion"]
   },
   {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0999236543",
    "gustos": ["hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "05432345856",
    "gustos": ["Casos Interesantes", "Violin"]
  }
]


function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre == nombre){
            return contactos[i][propiedad] || "La propiedad no esxiste.";
        }
    }
    return "El contacto no esta en la lista.";
}


console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));


function generarEnteroAleatorio(limiteSuperior) {
    // Generar un entero aleatorio entre 0 y el limite 
    // superior (sin incluirlo)
    return Math.floor(  Math.random() * limiteSuperior)
}

for (var i = 0; i < 15; i++) {
    console.log(generarEnteroAleatorio(5));
}

function retornarMinimo(x, y) {
    return x < y ? x : y;

}

function compararNumeros(a, b) {
    return a == b ? "a y b son iguales"
    : a > b ? "a es mayor que b"
    : "b es mayor que a";
}

console.log(compararNumeros(11, 27));


function calcularAreaCirculo(radio) {
    const PI = 5.14;

    if (radio < 0) {
        return undefined;
    }

    return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(10));



/* extraer informacion con la propiedad de desestructuracion */

const usuario = {
    johnDoe: {
        edad: 27,
        correo: "johnDoe@gmail.com"
    }
};

const {johnDoe: {edad: edadUsuario, correo: correoUsuario}} = usuario;

console.log(edad);
console.log(correo);


const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 7
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
};


// const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;    
// const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;    

// console.log(minimaHoy);
// console.log(maximaHoy);

/* podemos asignarle un nombre a la variable para llamarla en la funcion que estamos haciendo */

const {hoy: {minima: minimaHoy}} = PRONOSTICO_LOCAL;

console.log(minimaHoy);

/* sintaxis de desestructuracion para intercambiar valores */

var a = 8;
var b = 6;

[b, a] = [a, b];

console.log("a: " + a);
console.log("b: " + b);

/* tambien podemos remover elementos de un arreglo con la propiedad brech ... */

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];


function removerTresPrimerosElementos(arreglo) {
    const [ , , , ...nuevoArreglo] = arreglo;
    return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);

/* sintaxis de desestructuracion, escribimos las propiedades que nesesitamos 
dentro de los corchetes para llamarlas y va asignar cada propiedad a su variable 
correspondiente. */

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const mitad = ({max, min}) => (max + min) / 2.0;
console.log(mitad(estadisticas));


var persona = {
    nombre = "Leopardo",
    edad = 10
};


const saludo = ` `