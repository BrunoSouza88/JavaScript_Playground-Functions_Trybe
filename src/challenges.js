// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (array[array.length - 1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = 0;
  resultado = (wins * 3) + (ties * 1);
  return resultado;
}

// Desafio 6
function highestCount(array) { 
  let maiorNumero = Math.max(...array);
  let qtdRepete = [];
  
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      qtdRepete.push(array[index]);
    }
  }
  return qtdRepete.length;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let conjFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      conjFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      conjFizzBuzz.push('fizz');
    } else if (array[index] % 5 === 0) {
      conjFizzBuzz.push('buzz');
    } else {
      conjFizzBuzz.push('bug!');
    }
  }
  return conjFizzBuzz;
}

// Desafio 9
function encode(string) {
  let string2 = string;
  string2 = string2.replace(/a/g, '1');
  string2 = string2.replace(/e/g, '2');
  string2 = string2.replace(/i/g, '3');
  string2 = string2.replace(/o/g, '4');
  string2 = string2.replace(/u/g, '5');
  return string2;
}

function decode(string) {
  let string2 = string;
  string2 = string2.replace(/1/g, 'a');
  string2 = string2.replace(/2/g, 'e');
  string2 = string2.replace(/3/g, 'i');
  string2 = string2.replace(/4/g, 'o');
  string2 = string2.replace(/5/g, 'u');
  return string2;
}

// Desafio 10
function techList() {

}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
