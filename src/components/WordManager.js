import React, { Component } from 'react';
import Guess from './guess/Guess';
import Keyboard from './keyboard/Keyboard';

class WordManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessedWord: "TEST",
            won: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onKeyboardClick = this.onKeyboardClick.bind(this);
        this.onKeyboardSubmitButtonClick = this.onKeyboardSubmitButtonClick.bind(this);
        this.onKeyboardBackspaceButtonClick = this.onKeyboardBackspaceButtonClick.bind(this);
    }

    static defaultProps = {
        wordToGuess: "AABBA"
    }

    handleSubmit() {
        if (this.state.guessedWord === this.props.wordToGuess) {
            this.setState({ won: true });
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
        return (
            <div className='grid place-items-center '>

                <div>
                    Word is {this.props.wordToGuess}

                    <Guess currentGuess={this.state.guessedWord} />

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