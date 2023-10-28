const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");

let a = parseFloat(lines[0].split(" "))
let n = 3.14159
let raio
let area

raio = Math.pow(a , 2)

area = parseFloat(n * raio).toFixed(4)

console.log("A=" + area)