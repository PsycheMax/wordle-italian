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


    fs.appendFile('./DateWordsAssociation.js', jsonDeclaration, err => {
        if (err) {
            console.log(err);
            return
        }
    })

    let stringToWrite = ` 
    `;

    for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i];
        let additionalDay = new Date();
        additionalDay.setDate(startDate.getDate() + i);
        let stringTime = additionalDay.getTime();
        stringToWrite = stringToWrite.concat(`${stringTime} : "${word}"`);
        if (i === wordArray.length - 1) {
            console.log("Array is over");
        } else {
            stringToWrite = stringToWrite.concat(`,
            `);
        }
    }

    fs.appendFile('./DateWordsAssociation.js', stringToWrite, err => {
        if (err) {
            console.log(err);
            return
        }
    })

    fs.appendFile('./DateWordsAssociation.js', jsonEndFile, err => {
        if (err) {
            console.log(err);
            return
        }
    })


}

const listOfWords = [
    "ninja",
    "balle",
    "cotto",
    "pixel",
    "tetto",
    "mogia",
    "ligio",
    "hotel",
    "cucio",
    "lordo",
    "bidet",
    "tardi",
    "afoni",
    "cenci",
    "fauni",
    "igloo",
    "nasca",
    "parti",
    "relax",
    "tetre",
    "sardo",
    "panna"
];

createFromArray(listOfWords, Date.now());