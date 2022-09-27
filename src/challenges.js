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
        qtdRepete.push(array[index])
      }
    }
    return qtdRepete.length
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse === cat1 && mouse === cat2) {
    return 'os gatos trombam e o rato foge'
  } else if (cat2 < cat1) {
    return 'cat2'
  } else if (cat1 < cat2) {
    return 'cat1'
  }


  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
