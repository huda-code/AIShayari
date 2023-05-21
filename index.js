const fs = require('fs');

var frustruated = JSON.parse(fs.readFileSync('frustruated.txt','utf-8'));

for(let i=0;i<frustruated.length;i++){
	console.log(frustruated[i].shayari.length)
}
fs.writeFileSync('frustruated_formatted.txt',JSON.stringify(frustruated))