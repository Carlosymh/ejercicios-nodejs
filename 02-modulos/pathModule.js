// Modulo PATH
console.log(__filename);
console.log(__dirname);
const path = require('path');
const objPath = path.parse(__filename);
console.log(objPath.name);
