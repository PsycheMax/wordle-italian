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
        maximumLength: 5
    }

    renderGuessAsLetters() {
        console.log(this.props.currentGuess);
        let charArray = this.props.currentGuess.toString().split("");
        console.log(charArray);
        charArray.forEach(character => {
            arrayOfLetterComponents.push(this.renderLetter(character))
        });
        while (arrayOfLetterComponents.length < this.props.maximumLength) {
            arrayOfLetterComponents.push(this.renderLetter(" "));
        }
    }

    renderLetter(letter) {
        return <Letter
            keyValue={letter}
            key={letter + Date.now().toString() + (Math.random() * 999)}
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