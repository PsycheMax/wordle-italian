const fs = require('fs');

function readFile(writeCallback, targetFile) {
    fs.readFile(targetFile, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        let arrayOfWords = data.split('\r\n');
        let fiveLetterWords = [];
        arrayOfWords.forEach((word, index) => {
            if (word.length === 5) {
                fiveLetterWords.push(word);
            }
        });
        writeCallback(fiveLetterWords.toString() + ",", fiveLetterWords.length);
    })
}

function writeFile(content, numberOfEntries) {
    fs.appendFile('./output.txt', content, err => {
        if (err) {
            console.log(err);
            return
        }
    })
    fs.appendFile('./number.txt', numberOfEntries.toString() + `\r\n`, err => {
        if (err) {
            console.log(err);
            return
        }
    })
}

// readFile(writeFile, '../ITALIANO.A.txt');
function iterateFiles(mainPath) {
    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode("A".charCodeAt(0) + i);
        const filePath = `${mainPath}${letter}.txt`;
        readFile(writeFile, filePath);
    }
}

iterateFiles(`../ITALIANO.`);