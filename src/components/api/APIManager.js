import React, { Component } from 'react';
import words from './WordList.txt';
import JSONDateWords from "./ArrayOfWords";

class APIManager extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static defaultProps = {
        setWordsListInStateMethod: " ",
        wordList: "",
        setWordToGuessMethod: " "
    }

    componentDidMount() {
        fetch(words)
            .then((r) => r.text())
            .then(text => {
                let arrayOfWords = text.split(',');
                this.props.setWordsListInStateMethod(arrayOfWords);
                // this.props.setWordToGuessMethod(arrayOfWords[Math.floor(Math.random() * arrayOfWords.length + 1)])
                this.props.setWordToGuessMethod(this.checkTodayWord())
            })
    }

    checkTodayWord() {
        let today = new Date();
        let arrayOfDatesInJSONDateWords = Object.keys(JSONDateWords);
        let toReturn = "mammo";
        arrayOfDatesInJSONDateWords.forEach((date, index) => {
            // In the array of KEYS for the JSON object, the system checks if the CURRENT TIME is LESS than the current KEY && greater than the previous one. In that case, it's today
            if (today.getTime() <= date && today.getTime() >= arrayOfDatesInJSONDateWords[index - 1]) {
                // The following line sets the string toReturn to the previous key, because of the previous if() logic
                toReturn = JSONDateWords[arrayOfDatesInJSONDateWords[index - 1]];
            }
        });
        return toReturn;
    }

    render() {
        return (
            <span className='hidden' >
                {console.log(JSONDateWords)}
                {this.checkTodayWord()}
            </span>
        )
    }

}

export default APIManager;