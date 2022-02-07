const fs = require('fs');

function parseFile(targetFile) {
    console.log(targetFile);
    fs.readFile(targetFile, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        let arrayOfWords = data.split(',');
        let stringToWrite = "";
        arrayOfWords.forEach(word => {
            stringToWrite = stringToWrite.concat(`"${word}",`);
        });
        fs.appendFile('./randomizedWordsArray.txt', stringToWrite, err => {
            if (err) {
                console.log(err);
                return
            }
        })

    })
}


parseFile('./randomizedWords.txt');