const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


lines = lines[0].split(" ");

let valor = Number(lines[0])
let volume
let raio


volume = ((4/3.0) * 3.14159 * Math.pow(valor, 3)).toFixed(3)

console.log("VOLUME = " + volume)

