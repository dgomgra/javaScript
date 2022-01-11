/*  Spread Operator o Operador de Propagacion*/

/* ARRAYS */
// Este ejemplo no crea una copia, si no que numerosCopiados usa una referencia del original
const numeros_a = [1, 2, 3];
let numerosCopiados_a = numeros_a;
numerosCopiados_a[0] = 0;

console.log(numeros_a);
console.log(numerosCopiados_a);

// En este segundo caso si estamos creamos un nuevo array propagando todos los valores de numeros
const numeros_b = [1, 2, 3];
let numerosCopiados_b = [... numeros_b];
numerosCopiados_b[0] = 0;

console.log(numeros_b);
console.log(numerosCopiados_b);

// Para concatenar varios arrays
const array_1 = [1, 2, 3];
const array_2 = [4, 5, 6];
console.log(array_1.concat(array_2)); // Metodo del prototype de array
console.log([...array_1, ...array_2]); // Con Spread Operator
console.log([0, 1, ...array_1, 'prueba', 25, ...array_2, 35, 42]); // Añadiendo más elementos

/* OBJETOS */
// Copia de objetos y añadiendo nuevos datos 
const user = {
  name: 'David',
  id: 123
};
let copyUser = {...user};
copyUser.mail = 'test@mail.com';
console.log(user);
console.log(copyUser);

// Concatenacion de datos de objetos
const userContact = {
  twitter: '@pruebas',
  address: 'Calle principal'
};
const fullUser = Object.assign({}, user, userContact);
console.log(fullUser);

const fullUserSpread = {...user, ...userContact, address: 'Calle modificada'}; // Con Spread Operator y modificación de uno de los valores
console.log(fullUserSpread);



