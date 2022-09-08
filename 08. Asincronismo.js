/* Adincronismo en Javascript
javascript ejecuta su codigo en un solo proceso:
para evitar detenciones:
El Asincronismo nos va a permitir delegar esos procesos extensos a subprocesos que se van
a encargar de devolver esa tarea y despues volver a nuestro modelo prinsipal */

 /* Event loop --> Unico proceso va hacer el encargado de ejecutar cada una de las
  tareas de software, estas tareas van a ser afiliadas a ( event quaue -> colade evetos), 
  el event quaue va hacer el encargado de enviar los eventos al event loop para que lo ejecute
  el event loop */

  /* el event loop puede detectar en algun momento una tarea que es demaciada pesada como por ejemplo
  leer registros de la BD generar o escribir archivoz en disco...
  cuando el event loop detecta estas tareas se las envia  a  thread pool el theadpool va hacer
  el encargado de levantar otro proceso otro hilo para resolver esa tarea mas extensa. */

  /* Minetras que el event loop va a seguir despachando las demas tareas del event queue.
  una vez terminadas las tareas del event queue el event loop va a chequear el tread pool
  verificando si estas tareas ya han sido cumplidas.

  si ya han sido cumplidas van a moverse al event queue, para posteriormente si el event loop despachar
  nuevamente esta tarea */

  /* Una vez terminados los procesos del programa el event loop, va a mantenerse a la escucha
  de cualquier otro evento que ocurra en nuestro software */
  

  /* Funcion setimeout() --> es una funcion que resive 2 parametros el primero es una funcion,
  y el segundo parametro es de tiempo!.
  va a ejecutar la funcion del primer parametro despues de que pase el tiempo que determinas en el segundo 
  parametro.
  esta funcion resive parametros en milisegundos. 2000ms son 2 segundos. */




console.log('tarea 1');
console.log('tarea 2');
console.log('tarea 3');
setTimeout(() => {
    console.log('Tarea 4');
}, 2000)
console.log('tarea 5');


// callbacks

/* son funciones que se pasan como parametros a otras funciones para que estas una vez finalizadas
sus tareas, ejecuten la funcion que hemos enviado como parametro */

/* los callbacks se solian utilizar antes en javascript */

const suma= (a, b) => {
  return a + b
}

var resultado = suma(1, 2)

console.log(resultado);

//---------------------------------

const suma = (a, b, cb) => cb(a + b)

const imprimir = (data) => console.log(data);


suma(1,2, (resultado) => {
  console.log(resultado);
})

const getData = (cb) => {
  setTimeout(() => { 
    cb ({
       nombre: 'Sergio',
       Apellido: 'monterrey',
    })
  }, 3000);
}

const imprimirData = (Data) => console.log(Data);

 /* Asincronismo - then, catch */
 /* si es verdadero se va ejecutar el codigo, sino se va a ejecutar el callback error!, ára
 crear un error debemos utilizar la palabra reservada New Error*/

 const getData  = (cb, cbError) => {
  if (false) {
  setTimeout(() => { 
    cb ({
       nombre: 'Sergio',
       Apellido: 'monterrey',
    });
  }, 3000);
 } else {
   cbError(new Error('No se pudo obtener los datos'))
 }
};

const imprimirData = (Data) => console.log(Data);
const errorHandler = (error) => console.log(error);

getData(imprimirData, errorHandler);

