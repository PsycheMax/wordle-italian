import React, { Component } from 'react';
import Letter from './Letter';

let arrayOfLetterComponents = [];
class Guess extends Component {

    constructor(props) {
        super(props);
        this.renderGuessAsLetters = this.renderGuessAsLetters.bind(this);
        this.renderLetter = this.renderLetter.bind(this);
    }

    static defaultProps = {
        currentGuess: ""
    }

    renderGuessAsLetters() {

        let charArray = this.props.currentGuess.split("");
        console.log(charArray);
        charArray.forEach(character => {
            arrayOfLetterComponents.push(this.renderLetter(character))
        });
    }

    renderLetter(letter) {
        return <Letter
            keyValue={letter}
        />;
    }

    render() {
        arrayOfLetterComponents = [];
        this.renderGuessAsLetters();
        return (
            <div className='grid grid-cols-5 w-4/6' >
                {arrayOfLetterComponents};
            </div>
        )
    }

}

export default Guess;