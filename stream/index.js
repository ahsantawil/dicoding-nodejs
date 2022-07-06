const fs = require('fs');
const { resolve } = require('path');
 
const readableStream = fs.createReadStream(resolve(__dirname,'./input.txt'), {
    highWaterMark: 15
});

const writeOutput = fs.createWriteStream(resolve(__dirname,'./output.txt'));

 
readableStream.on('readable', () => {
    try {
        writeOutput.write(`${readableStream.read()}\n`);
    } catch(error) {
       console.log(error);
    }
});
 
readableStream.on('end', () => {
    writeOutput.end();
});