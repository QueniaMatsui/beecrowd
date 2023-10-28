const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");


let A;
let B;
let X;

A = parseInt(lines[0]);
B = parseInt(lines[1]);

X = A + B


console.log("X = "+ X);