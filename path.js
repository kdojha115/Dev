let path = require("path");
console.log(__filename);

let dirPath = __dirname;
console.log(__dirname);

let extnName = path.extname("/Users/kundankumarojha/Desktop/project/Fjp6/Module2/Node/path.js");
console.log(extnName);

let basen = path.basename(__filename);
console.log(basen);

let newFilePath = path.join(dirPath,"testing.js");
console.log(newFilePath);
