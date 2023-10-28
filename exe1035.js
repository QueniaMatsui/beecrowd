const { clear } = require('console');
const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')


///////////////////////////// Daqui pra baixo/////////////////////////////

var lines = input.split('\n')

lines = lines[0].split(" ")

const primeiralinha = Number(lines[0].split(" "))


let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseInt(lines[2])
let D = parseInt(lines[3])



if (((B > C) && (D > A))) && ((C + D) > (A + B)) && (((C>= 0) && (D >= 0)) && (A % 2 === 0)) {
    console.log ("Valores aceitos");    
        
} else {
    console.log ("Valores nao aceitos");
}
    
    
    
    