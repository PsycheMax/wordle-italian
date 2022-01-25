import React, { Component } from 'react';
import Letter from './Letter';

let arrayOfLetterComponents = [];
class GuessDisplay extends Component {

    constructor(props) {
        super(props);
        this.renderGuessAsLetters = this.renderGuessAsLetters.bind(this);
        this.renderLetter = this.renderLetter.bind(this);
    }

    static defaultProps = {
        currentGuess: "",
        maximumLength: 5,
        statusArray: ["", "", "", "", ""]
    }

    renderGuessAsLetters() {
        let charArray = this.props.currentGuess.toString().split("");
        for (let i = 0; i < charArray.length; i++) {
            const character = charArray[i];
            arrayOfLetterComponents.push(this.renderLetter(character, i))
        }
        while (arrayOfLetterComponents.length < this.props.maximumLength) {
            arrayOfLetterComponents.push(this.renderLetter(" ", -1));
        }
    }

    renderLetter(letter, index) {
        return <Letter
            keyValue={letter}
            key={letter + Date.now().toString() + (Math.random() * 999)}
            status={this.props.statusArray[index]}
        />;
    }

    render() {
        arrayOfLetterComponents = [];
        this.renderGuessAsLetters();
        return (
            <div className='grid grid-cols-5 w-4/6' >
                {arrayOfLetterComponents}
            </div>
        )
    }

}

export default GuessDisplay;