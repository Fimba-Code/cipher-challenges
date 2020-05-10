
const assert = require('assert').strict;

const ALFTA_NUMERIC = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypt(text, alfa_num, steps) {
  let sign = Math.sign(steps);
  let result = '';
  const alfa_num_size = alfa_num.length;
  for (let letter of text) {
    const idx = alfa_num.indexOf(letter.toLowerCase());
    if (letter === ' ' || idx < 0) {
      result += letter;
    } else {
      const step = idx + steps;
      if (step >= 0) {
        result += alfa_num[step];
      } else {
        const newStep = alfa_num_size + step;
        result += alfa_num[newStep];
      }
    }
  }
  return result.toUpperCase();
};

console.log(assert.equal(encrypt("chuck norris can cut a knife with butter", ALFTA_NUMERIC, -1), 'bgtbj mnqqhr b9m bts 9 jmhed vhsg atssdq'.toUpperCase()));
console.log(assert.equal(encrypt("ABC", ALFTA_NUMERIC, -3), '789'));
console.log(assert.equal(encrypt("CADA MALLOC PRECISA DE UM FREE", ALFTA_NUMERIC, 5), 'HFIF RFQQTH UWJHNXF IJ ZR KWJJ'));
console.log(assert.equal(encrypt("0123", ALFTA_NUMERIC, -2), 'YZ01'));
