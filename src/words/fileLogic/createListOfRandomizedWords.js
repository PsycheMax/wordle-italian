const fs = require('fs');

function randomizeFromArray(array) {
    let arrayCopy = array;
    let arrayResult = [];
    console.log(arrayResult);
    while (arrayCopy.length !== 0) {
        let randomIndex = Math.floor(Math.random() * arrayCopy.length);
        arrayResult.push(arrayCopy[randomIndex]);
        arrayCopy.splice(randomIndex, 1);
    }
    return (arrayResult);
}

function writeFile(content) {
    fs.appendFile('./randomizedWords.txt', content, err => {
        if (err) {
            console.log(err);
            return
        }
    })
}

function parseFile(targetFile) {
    console.log(targetFile);
    fs.readFile(targetFile, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        let arrayOfWords = data.split(',');
        let toWrite = randomizeFromArray(arrayOfWords);
        writeFile(toWrite.toString());
    })
}

parseFile('./output.txt');