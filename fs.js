let fs = require("fs");
//console.log(fs);

let path = require("path");

let filname = path.join(__dirname,"file.txt");
console.log(filname);

fs.writeFileSync(filname,"bolo Hi kd");

console.log("Before update : ");
let content = fs.readFileSync()
