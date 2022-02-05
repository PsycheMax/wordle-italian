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

    /**
     * When mounted, this component will fetch the text file containing a dictionary of correct words separated by commas. 
     * These words are the only words accepted by the game - make sure that the WINNING words are contained in this file.
     */
    componentDidMount() {
        // Fetches the text file
        fetch(words)
            // Converts the file buffer in text
            .then((r) => r.text())
            .then(text => {
                // Splits the long string of that file in strings for the array
                let arrayOfWords = text.split(',');
                // Sets the wordList in the GameManager state
                this.props.setWordsListInStateMethod(arrayOfWords);
                // Sets in the GameManager state the correct guess for the current day.
                this.props.setWordToGuessMethod(this.checkTodayWord())
            })
    }

    /**
     * This function checks what Day today is, and what word is associated with today's time
     * @returns Returns a string containing today's word
     */
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
            </span>
        )
    }
}

export default APIManager;