// Pregunta 2
console.log("\nPregunta 2");

// Pregunta 3.
console.log("\nPregunta 3");
const nombre = "Gilmer";
const mensaje1 = `Hola ${nombre}`; // se utiliza `` (backticks)  para template strings
console.log(mensaje1);

// Pregunta 4.
console.log("\nPregunta 4");

const persona1 = {
  nombre: "Gilmer",
  apellido: "Cabrera",
  direccion: {
    calle: "Avenida la mar",
    numero: "231",
  },
};

const persona2 = {
  nombre: "Gilmer",
  apellido: "Cabrera",
};

if (persona1.direccion?.calle) {
  console.log(persona1.direccion.calle);
} else {
  console.log("No esta definido calle");
}

if (persona2?.direccion?.calle) {
  console.log(persona1.direccion.calle);
} else {
  console.log("No esta definido calle");
}

//Pregunta 5
console.log("\nPregunta 5");
const error = false; //  valores falsy = false, 0, null, undefined, NaN, "".
const mensaje = error || "Todo bien";
console.log(mensaje);

// Pregunta 6
console.log("Pregunta 6");
function saludar(mensaje = "Gilmer") {
  console.log(`Hola ${mensaje}`);
}

saludar("Pedro");
saludar();

// Pregunta 7
console.log("\nPregunta 7");
const persona3 = {
  nombre3: "Pedro",
  apellido3: "Lopez",
};

const { nombre3, apellido3 } = persona3;
console.log(nombre3);
console.log(apellido3);

const { nombre3: name1, apellido3: lastname } = persona3;
console.log(name1);
console.log(lastname);

// Pregunta 8
console.log("\nPregunta 8");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
console.log(arr);

// Pregunta 9
console.log("\nPregunta 9");

const persona4 = {
  nombre4: "Juan",
  apellido4: "Perez",
  edad4: 20,
  hobby4: "dibujar",
};

const { nombre4, edad4, ...resto } = persona4;
console.log(nombre4);
console.log(edad4);
console.log(resto);

// Pregunta 10
console.log("\nPregunta 10");
const nombre5 = "Leslie";
const apellido5 = "garcía";

// Comun
persona5a = {
  nombre5: nombre5,
  apellido5: apellido5,
};
// property shorthand
persona5b = { nombre5, apellido5 };

console.log(persona5a);
console.log(persona5b);

// Pregunta 11
console.log("\nPregunta 11");
const arr3 = [1, 2, 3];

const [ , numero2, numero3] = arr3;
console.log(numero2);
console.log(numero3);

// Pregunta 12
console.log("\nPregunta 12");

// Pregunta 13
console.log("\nPregunta 13");

const suma = (a, b) => {
  return a + b;
};

console.log(suma(3, 5));

// Pregunta 14
console.log("\nPregunta 14");

const saludar1 = function () {
  return "¡Hola!";
};

console.log(saludar1());

// Pregunta 15
console.log("\nPregunta 15");

// Definición de la función con parámetros a y b
function sumar(a, b) {
  return a + b;
}
// Llamada a la función con argumentos 3 y 4
const resultado = sumar(3, 4);
console.log(resultado);

// Pregunta 16
console.log("\nPregunta 16");
// ES6 significa ECMAScript 6, que es la sexta versión del estándar ECMAScript para JavaScript.

// Pregunta 17
console.log("\nPregunta 17");
const numeros = [1, 2, 3, 4, 5];
const sumar2 = (acumulador, valorActual) => acumulador + valorActual;
const sumaTotal = numeros.reduce(sumar2, 0);
console.log(sumaTotal);

// Pregunta 18
console.log("\nPregunta 18");

// Pregunta 19
console.log("\nPregunta 19");

const numeros2 = [1, 2, 3, 4, 5];
const numeros2Dobles = numeros2.map((e) => e * 2);
console.log(numeros2Dobles);

// Pregunta 20
console.log("\nPregunta 20");
//               [0, 1, 2, 3, 4]
const numeros3 = [1, 2, 3, 4, 5];
console.log(numeros3.splice(3));

// Pregunta 21
console.log("\nPregunta 21");
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const suma1 = numeros4.reduce((acc, elem) => acc + elem);
console.log(suma1);

// Pregunta 22
console.log("\nPregunta 22"); // peración sincróna

function fetchOptions() {
  fetch("options.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error fetching options:", error));
}

fetchOptions();
//Inicia una operación de red asincrónica que no se bloquea, lo que significa que la ejecución del script continúa mientras se espera la respuesta del servidor.


// Pregunta 23
console.log("\nPregunta 23"); // operación síncrona

const miPromesa = new Promise((resolve, reject) => {
  const todoBien = true; // Simulación de éxito o fallo.
  if (todoBien) {
    resolve("Operación exitosa.");
  } else {
    reject("Error en la operación.");
  }
});

miPromesa
  .then((resultado) => console.log(resultado)) // 'Operación exitosa.'
  .catch((error) => console.error(error)); // 'Error en la operación.'


//   Síncrono vs. Asíncrono:

//  1. console.log("\nPregunta 22"); y console.log("\nPregunta 23"); son operaciones síncronas, por lo que se ejecutan inmediatamente en el orden en que aparecen en el código.
//  2. La llamada a fetchOptions(); inicia una operación de red asincrónica que no se bloquea, lo que significa que la ejecución del script continúa mientras se espera la respuesta del servidor.
//  3. La creación de miPromesa y la cadena de then y catch también son manejadas asincrónicamente.



//  Proceso a partir de la pregunta 22 (Linea 179) : 

//  1.Primero se ejecuta console.log("\nPregunta 22"); y se imprime "Pregunta 22" en la consola.
//  2.Luego, la función fetchOptions() se llama y comienza a ejecutar la solicitud fetch("options.json").
//  3.Inmediatamente después, console.log("\nPregunta 23"); se ejecuta y "Pregunta 23" se imprime en la consola.
//  4.Se crea miPromesa y se resuelve inmediatamente con "Operación exitosa." porque todoBien es true.
//  5.El then adjunto a miPromesa se coloca en la cola de microtareas y se ejecuta tan pronto como el ciclo de eventos tenga la oportunidad, resultando en "Operación exitosa." impreso en la consola.
//  6.Mientras tanto, la solicitud fetch sigue esperando la respuesta del servidor.
//  7.Una vez que la respuesta del fetch llega, el primer then de fetchOptions se ejecuta y response.json() también se maneja asincrónicamente.
//  8.Cuando response.json() se completa, el segundo then se ejecuta e imprime los datos recibidos.