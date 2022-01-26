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
            allGuesses: [],
            gameOver: false,
            lettersUsed: {
                wrongLetters: [],
                correctLetters: [],
                correctLettersInPlace: []
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onKeyboardClick = this.onKeyboardClick.bind(this);
        this.onKeyboardSubmitButtonClick = this.onKeyboardSubmitButtonClick.bind(this);
        this.onKeyboardBackspaceButtonClick = this.onKeyboardBackspaceButtonClick.bind(this);
        this.handleKeyColoring = this.handleKeyColoring.bind(this);
        this.createStatusArray = this.createStatusArray.bind(this);
    }

    static defaultProps = {
        wordToGuess: "lillo",
        maxTentatives: 6
    }

    componentDidMount() {
        let emptyGuesses = [];
        for (let i = 0; i < this.props.maxTentatives; i++) {
            emptyGuesses.push("");
        }
        this.setState({
            allGuesses: emptyGuesses
        })
    }

    handleSubmit() {
        if (this.state.numberOfTentatives < this.props.maxTentatives) {
            let guess = {
                word: this.state.guessedWord,
                statusArray: this.createStatusArray(this.state.guessedWord)
            };
            if (guess.word.toLowerCase() === this.props.wordToGuess.toLowerCase()) {
                this.setState({ won: true });
            } else {
                this.setState((prevState) => {
                    let newAllGuesses = prevState.allGuesses;
                    newAllGuesses[this.state.numberOfTentatives] = guess;
                    let newLettersUsed = this.handleKeyColoring(guess.word);
                    return {
                        won: false,
                        guessedWord: "",
                        allGuesses: newAllGuesses,
                        numberOfTentatives: prevState.numberOfTentatives + 1,
                        lettersUsed: newLettersUsed
                    }
                })
            }
        }
    }

    onKeyboardClick(letterToAddToGuess) {
        if (this.state.guessedWord.length < this.props.wordToGuess.length) {
            this.setState({ guessedWord: this.state.guessedWord + letterToAddToGuess });
        } else {
            console.log("Can't add letter - not enough space");
        }
    }

    onKeyboardSubmitButtonClick() {
        if (this.state.guessedWord.length === this.props.wordToGuess.length) {
            this.handleSubmit();
        } else {
            console.log("Can't submit yet - not enough letters");
        }
    }

    onKeyboardBackspaceButtonClick() {
        if (this.state.guessedWord.length !== 0) {
            this.setState({ guessedWord: this.state.guessedWord.slice(0, -1) });
        } else {
            console.log("Can't erase empty spaces");
        }
    }

    handleKeyColoring(guessWord) {
        let newLettersUsed = this.state.lettersUsed;
        let solutionLettersArray = this.props.wordToGuess.toString().toLowerCase().split("");
        let guessLettersArray = guessWord.toString().toLowerCase().split("");
        for (let i = 0; i < guessLettersArray.length; i++) {
            const guessLetter = guessLettersArray[i];
            if (guessLetter === solutionLettersArray[i]) {
                newLettersUsed.correctLettersInPlace.push(guessLetter);
            } else {
                solutionLettersArray.forEach(solutionLetter => {
                    if (guessLetter === solutionLetter) {
                        newLettersUsed.correctLetters.push(guessLetter);
                    } else {
                        newLettersUsed.wrongLetters.push(guessLetter);
                    }
                });
            }
        }
        return newLettersUsed;
    }

    createStatusArray(guessWord) {
        let guessLettersArray = guessWord.toString().toLowerCase().split("");
        let solutionLettersArray = this.props.wordToGuess.toString().toLowerCase().split("");
        let statusArray = [];
        for (let i = 0; i < guessLettersArray.length; i++) {
            statusArray.push(this.compareCharacterToArray(guessLettersArray, i, solutionLettersArray));
        }
        return statusArray;
    }

    compareCharacterToArray(guessArray, index, solutionArray) {
        for (let j = 0; j < solutionArray.length; j++) {
            if (guessArray[index] === solutionArray[index]) {
                return "correctInPlace";
            } else {
                if (guessArray[index] === solutionArray[j]) {
                    return "correct";
                }
            }
        }
        return "wrong";
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

                    <Keyboard
                        lettersUsed={this.state.lettersUsed}
                        onKeyClickCallback={this.onKeyboardClick}
                        onKeyboardSubmitButtonClick={this.onKeyboardSubmitButtonClick}
                        onKeyboardBackspaceButtonClick={this.onKeyboardBackspaceButtonClick}
                    />
                </div>
            </div>
        )
    }
}

export default WordManager;