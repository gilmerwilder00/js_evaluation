
// Pregunta 27/ Pregunta 28
console.log("\nPregunta 27 y 28"); // operación síncrona

const mascota:string = 'perro';
const edadMascota: number = 2;

const mascota1:string = 'perro';
const edadMascota1: number = 2;

//  const errorOperation1:number = mascota + edadMascota1;
const errorOperation2:number = edadMascota + edadMascota1;
console.log(errorOperation2);


//  Pregunta 29
console.log("\nPregunta 29"); 

interface  ejemploPersona {
    nombre :string;
    apellido:string;
    edad: number;
    esCasado : boolean;
}

const myself:ejemploPersona ={nombre:"Gilmer", apellido: 'cabrera', edad:27, esCasado:false};
console.log(myself);

//  Pregunta 30
console.log("\nPregunta 30"); 

const numbers: number[]= [1,2,3,4]
console.log(numbers);

const numbers2: Array<number> = [5,6,7,8];
console.log(numbers2);


//  Pregunta 31
console.log("\nPregunta 31"); 
type Mixto = number | string;

let number:Mixto = 25;
console.log(number);
number = "Number 25"
console.log(number);

 