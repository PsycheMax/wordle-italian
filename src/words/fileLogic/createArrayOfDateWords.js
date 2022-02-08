const fs = require('fs');

function createFromArray(wordArray, startDateNumber) {
    console.log(startDateNumber);
    let startDate = new Date();
    startDate.setTime(startDateNumber);
    console.log(startDate.getTime());
    startDate.setHours(0, 0, 0, 0);
    console.log(startDate.getTime());
    const jsonDeclaration = `const wordDateAssociation = {`;
    const jsonEndFile = `
        }
        export default wordDateAssociation;`;


    fs.appendFile('./DateWordsAssociation2.js', jsonDeclaration, err => {
        if (err) {
            console.log(err);
            return
        }
    })

    let stringToWrite = ` 
    `;

    console.log(startDate.getTime());
    console.log(startDate.getDate());
    for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i];
        let additionalDay = new Date();
        additionalDay.setDate(startDate.getDate() + i);
        additionalDay.setHours(0, 0, 0, 0);
        let stringTime = additionalDay.getTime();
        stringToWrite = stringToWrite.concat(`${stringTime} : "${word}"`);
        if (i === wordArray.length - 1) {
            console.log("Array is over");
        } else {
            stringToWrite = stringToWrite.concat(`,
            `);
        }
    }

    fs.appendFile('./DateWordsAssociation2.js', stringToWrite, err => {
        if (err) {
            console.log(err);
            return
        }
    })

    fs.appendFile('./DateWordsAssociation2.js', jsonEndFile, err => {
        if (err) {
            console.log(err);
            return
        }
    })
}

fs.readFile('./randomizedWords.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    let listOfWords = data.split(',');
    createFromArray(listOfWords, Date.now());
});