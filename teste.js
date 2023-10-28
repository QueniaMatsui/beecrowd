const path = require('path')

const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8')

var lines = input.split('\n')


//lines = lines[0].split(" ");

const prompt = require ("prompt-sync")();
