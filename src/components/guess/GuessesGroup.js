import React, { Component } from 'react';
import GuessDisplay from './GuessDisplay';

let guessesRows = [];
class GuessesGroup extends Component {

    constructor(props) {
        super(props);
        this.renderGuessRow = this.renderGuessRow.bind(this);
        this.renderGuesses = this.renderGuesses.bind(this);
    }

    static defaultProps = {
        guessesArray: [{
            word: "",
            statusArray: []
        }],
        maximumLength: 5
    }

    renderGuessRow(guess) {
        return <div className='row grid grid-cols-1 place-items-center' key={guess.word + Date.now().toString() + (Math.random() * 999 * Math.random())}>
            <GuessDisplay maximumLength={this.props.maximumLength}
                currentGuess={guess.word}
                statusArray={guess.statusArray}
            />
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
            <div key="guessesGroup" className='grid grid-cols-1' >
                {guessesRows}
            </div>
        )
    }
}

export default GuessesGroup;