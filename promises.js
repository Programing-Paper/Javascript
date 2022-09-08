
/* ne primises es una funcion que resive un colback, en este colback promise va a inyectar 
2 colbacks mas, la primera se llama resolve y la segunda reject */

// resolve se ejecuta si el codigo se ejecuta de forma adecuada si no va a ejecutar reject


const getData = () => {
    return new Promise((resolve, reject) => {
    })
}

/* tambien se podria de esta forma, recuerda qye las funciones expresivas como la flecha =>
llevan implicito el return */

const getData = () => new Promise((resolve, reject) => {
});

// asi se veria en una funcion

function getData() {
    return new Promise((resolve, reject) => {
    })
}

const getData = new Promise((resolve, reject) => {})

/* Las promesas tienen 2 formas de resolverse una de ellas es utilizando funciones de la promesa 
que son then, catch. y la otra forma es utilizando asin awey que son palabras reservadas*/

// Funcion que retorna una promesa, se le puede pasar un parametro

const getData = (error) => new Promise((resolve, reject) => {
    if (!error) {
        resolve({
            nombre: 'Gabriel',
            Apellido: 'Arguello',
    })
   } else {
     reject('No pudimos obtener los datos')
   }
})

  // getData2 es igual a una nueva promesa, no podemos pasarle un parametro dentro de la promesa.

  const getData2 = new Promise((resolve, reject) => { 
  })


// Las promesas nos van Ayudar a trabajar con los procesos Asincronos
/* then - catch --> getData nos va a retornar una promesa y al retornar una promesa nos va 
habilitar los metodos de esa promesa retornada, y entre esos metodos mediante la anotacion 
.teh en caso de que se resuelva exitosamente .catch para que atrape algun error existente. 
estos metodos van a resivir callbacks y apartir de ellos podemos trabajarlos */ 


getData(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })


//---

const getData = (error) => 
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(()=> {
          resolve({
            nombre: 'Gabriel',
            Apellido: 'Arguello',
      });
    }, 3000);
 } else {
   reject('No pudimos obtener los datos');
 }
});


const getData2 = (error) =>
 new Promise((resolve, reject) => {
  if (!error) {
    setTimeout(()=> {
          resolve({
          nombre: 'Juanda',
          Apellido: 'Arguello',
      });
    }, 3000);
  }else {
   reject('No pudimos obtener los datos de data 2');
 }
});

/* Tambien podemos encadenas promesas, solo es nesesario hacer un .catch ya que si ocurre 
un error en cualquiera de los then se va a ejecutar el catch */
console.log('Inicio');

getData(false)
  .then((data) => {
    console.log(data);
    return getData2(true)
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })

  console.log('Fin');

// async - await se implemento para dar solucion al then - cash
/* con async await bamos a resolver promesas unicamente con palabras reservadas, para que
funciona aweit debe existir async, async debe estar antes de la funcion */



const getData = (error) => 
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(()=> {
          resolve({
            nombre: 'Gabriel',
            Apellido: 'Arguello',
      });
    }, 3000);
 } else {
   reject('No pudimos obtener los datos');
 }
});

const getData2 = (error) =>
 new Promise((resolve, reject) => {
  if (!error) {
    setTimeout(()=> {
          resolve({
          nombre: 'Juanda',
          Apellido: 'Arguello',
      });
    }, 3000);
  }else {
   reject('No pudimos obtener los datos de data 2');
 }
});


const main = async () => {
  try {
  let resultado = await getData(false);
  let resultado2 = await getData2(true); 
  console.log(resultado);
  console.log(resultado2);
} catch(error) {
  console.log(error);
}
};

main();







