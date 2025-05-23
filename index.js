console.log("----- TIPOS DE VARIABLES -----");

console.log("Tipo number");
// Número entero (dato cuantitativo)
let numero;
numero = 42;
console.log("Este es el valor de numero:", numero);

console.log("Tipo string");
// Cadena de texto (dato cualitativo)
let texto;
texto = "soy Keny";
console.log(texto);

console.log("Tipo boolean");
// Valor lógico verdadero/falso
let esActivo;
esActivo = true;
console.log("Es activo:", esActivo);

console.log("Tipo array");
// Lista de números (valores cuantitativos)
let lista;
lista = [1, 2, 3, 4];
console.log("Lista:", lista);

console.log("Navegacion en un array");
// Lista de letras (valores cualitativos)
let lista2;
lista2 = ["H", "J", "K"];
console.log("Personas:", lista2);

console.log("Este es el primer número de la lista 1");
// Primer elemento del array
console.log(lista[0]);

console.log("Este es el último número de la lista 1");
// Último elemento del array
console.log(lista[3]);

console.log("Este es un número no definido de la lista 1");
// Índice fuera del rango (valor undefined)
console.log(lista[5]);

console.log("Tipo object");
// Objeto con varios tipos de datos
let persona;
persona = { nombre: "Ana", edad: 25, esReal: true };
console.log(persona);

console.log("Forma de trabajar con un objeto");
// Objeto con una propiedad que viene de un array
let persona2;
let lista3;
lista3 = ["Masculino", "Femenino"];
persona2 = { nombre: "Keny", edad: 15, esReal: false, Genero: lista3[0] };
console.log(persona2);


console.log("Tipo undefined");
// Variable declarada sin valor asignado
let miVaraible;
console.log(miVaraible);

console.log("Tipo null");
// Valor nulo intencional (sin contenido)
miVaraible = null;
console.log(miVaraible);
