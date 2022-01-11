[1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 !== 0)
  .map(n => n * 2);

[1, 2, 3, 4, 5, 6]
  .map(n => n % 2 === 0 ? false : n * 2)
  .filter(n => n !== false);

// Añade el array interior al superior
[1, 2, 3, [4, 5]].flat();
[1, 2, 3, [4, [5, 6]]].flat(Infinity);

[1, 2, 3, 4, 5, 6]
  // en este caso no se aplana el array si no 
  // cuando el valor es par añade una array vacío
  // que luego aplana y lo elimina del array final
  // que retorna el map
  .flatMap(n => n % 2 === 0 ? [] : n * 2);




