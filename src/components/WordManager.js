import React, { Component } from 'react';
import GuessDisplay from './guess/GuessDisplay';
import PreviousGuesses from './guess/PreviousGuesses';
import Keyboard from './keyboard/Keyboard';

class WordManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessedWord: "",
            won: false,
            numberOfTentatives: 0,
            allGuesses: ["", "", "", "", "", ""],
            gameOver: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onKeyboardClick = this.onKeyboardClick.bind(this);
        this.onKeyboardSubmitButtonClick = this.onKeyboardSubmitButtonClick.bind(this);
        this.onKeyboardBackspaceButtonClick = this.onKeyboardBackspaceButtonClick.bind(this);
    }

    static defaultProps = {
        wordToGuess: "lillo",
        maxTentatives: 6
    }

    handleSubmit() {
        if (this.state.numberOfTentatives < this.props.maxTentatives) {
            let guess = this.state.guessedWord;
            if (guess.toLowerCase() === this.props.wordToGuess.toLowerCase()) {
                this.setState({ won: true });
            } else {
                this.setState((prevState) => {
                    let newAllGuesses = prevState.allGuesses;
                    newAllGuesses[this.state.numberOfTentatives] = guess;
                    return {
                        won: false,
                        guessedWord: "",
                        allGuesses: newAllGuesses,
                        numberOfTentatives: prevState.numberOfTentatives + 1
                    }
                })
            }
        }
    }

    onKeyboardClick(letterToAddToGuess) {
        console.log("In WORD MANAGER - CALLBACK");
        if (this.state.guessedWord.length < this.props.wordToGuess.length) {
            this.setState({ guessedWord: this.state.guessedWord + letterToAddToGuess });
        } else {
            console.log("Can't add letter");
        }
    }

    onKeyboardSubmitButtonClick() {
        console.log("In WORD MANAGER - CALLBACK");
        if (this.state.guessedWord.length === this.props.wordToGuess.length) {
            this.handleSubmit();
        } else {
            console.log("Can't submit yet - not enough letters");
        }
    }

    onKeyboardBackspaceButtonClick() {
        console.log("In WORD MANAGER - CALLBACK");
        if (this.state.guessedWord.length !== 0) {
            this.setState({ guessedWord: this.state.guessedWord.slice(0, -1) });
        } else {
            console.log("Can't erase empty spaces");
        }
    }

    render() {
        if (this.state.numberOfTentatives === this.props.maxTentatives && this.state.gameOver === false) {
            this.setState({ gameOver: true })
        }
        return (
            <div className='grid place-items-center '>

                <div>
                    Word is {this.props.wordToGuess.toUpperCase()}

                    <div className='grid place-items-center'>
                        <GuessDisplay currentGuess={this.state.guessedWord} />
                    </div>

                    <PreviousGuesses guessesArray={this.state.allGuesses} />

                    {this.state.won ?
                        <div>YES</div>
                        : <div>NO</div>
                    }

                    <Keyboard onKeyClickCallback={this.onKeyboardClick} onKeyboardSubmitButtonClick={this.onKeyboardSubmitButtonClick} onKeyboardBackspaceButtonClick={this.onKeyboardBackspaceButtonClick} />
                </div>
            </div>
        )
    }
}

export default WordManager;