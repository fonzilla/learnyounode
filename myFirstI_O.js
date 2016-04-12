var fs = require('fs');

var content = fs.readFileSync(process.argv[2]);
var sol = content.toString().split('\n').length-1
console.log(sol); 