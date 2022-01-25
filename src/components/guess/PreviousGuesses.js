import React, { Component } from 'react';
import GuessDisplay from './GuessDisplay';

let guessesRows = [];
class PreviousGuesses extends Component {

    constructor(props) {
        super(props);
        this.renderGuessRow = this.renderGuessRow.bind(this);
        this.renderGuesses = this.renderGuesses.bind(this);
    }

    static defaultProps = {
        guessesArray: ["", "", "", "", "", ""],
        maximumLength: 5
    }

    renderGuessRow(word) {
        return <div className='row grid grid-cols-1 place-items-center'>
            <GuessDisplay maximumLength={this.props.maximumLength} currentGuess={word} key={word + Date.now().toString()} />
        </div>
    }

    renderGuesses() {
        for (let i = 0; i < this.props.guessesArray.length; i++) {
            const guess = this.props.guessesArray[i];
            guessesRows.push(this.renderGuessRow(guess));
        }
    }

    render() {
        guessesRows = [];
        this.renderGuesses();
        return (
            <div className='grid grid-cols-1' >

                {guessesRows}

            </div>
        )
    }
}

export default PreviousGuesses;