import React, { Component } from 'react';
import words from './WordList.txt'

class APIManager extends Component {
    arrayList = [];

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
                this.props.setWordToGuessMethod(arrayOfWords[Math.floor(Math.random() * arrayOfWords.length + 1)])
            })
    }

    render() {
        return (
            <span className='hidden' >
            </span>
        )
    }

}

export default APIManager;