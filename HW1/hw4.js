'use strict';
let num = +prompt('введите положительное число');

console.log(numberToObject(num))

function numberToObject(num) {
  if (num === isNaN || !Number.isInteger(num) || num < 0 || num > 999) {
    console.log('Вы ввели не число/число не целое/число вне диапазона');
    return {}
  }

  return {
    units: num % 10,
    tens: Math.floor((num / 10) % 10),
    hundreds: Math.floor((num / 100) % 10),
  }
}

