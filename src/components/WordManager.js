import React, { Component } from 'react';
import EndGameMenu from './gameOver/EndGameMenu';
import GuessesGroup from './guess/GuessesGroup';
import Keyboard from './keyboard/Keyboard';

class WordManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            won: false,
            numberOfTentatives: 0,
            allGuesses: [{
                word: "",
                statusArray: [""]
            }],
            gameOver: true,
            showStats: false,
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
        this.toggleStats = this.toggleStats.bind(this);
    }

    static defaultProps = {
        wordToGuess: "lillo",
        maxTentatives: 6
    }

    componentDidMount() {
        let emptyGuesses = [{ word: "", statusArray: [""] }];
        for (let i = 0; i < this.props.maxTentatives; i++) {
            let emptyGuess = { word: "", statusArray: [""] }
            emptyGuesses.push(emptyGuess);
        }
        this.setState({
            allGuesses: emptyGuesses
        })
    }

    handleSubmit() {
        if (this.state.numberOfTentatives <= this.props.maxTentatives) {
            let guess = {
                word: this.state.allGuesses[this.state.numberOfTentatives].word,
                statusArray: this.createStatusArray(this.state.allGuesses[this.state.numberOfTentatives].word)
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
                        allGuesses: newAllGuesses,
                        numberOfTentatives: prevState.numberOfTentatives + 1,
                        lettersUsed: newLettersUsed
                    }
                })
            }
        }
    }

    onKeyboardClick(letterToAddToGuess) {
        if (this.state.allGuesses[this.state.numberOfTentatives].word.length < this.props.wordToGuess.length) {
            let allGuessesModified = this.state.allGuesses;
            allGuessesModified[this.state.numberOfTentatives].word = this.state.allGuesses[this.state.numberOfTentatives].word + letterToAddToGuess;
            this.setState({
                allGuesses: allGuessesModified
            });
        } else {
            console.log("Can't add letter - not enough space");
        }
    }

    onKeyboardSubmitButtonClick() {
        if (this.state.allGuesses[this.state.numberOfTentatives].word.length === this.props.wordToGuess.length) {
            this.handleSubmit();
        } else {
            console.log("Can't submit yet - not enough letters");
        }
    }

    onKeyboardBackspaceButtonClick() {
        if (this.state.allGuesses[this.state.numberOfTentatives].word.length !== 0) {
            let allGuessesModified = this.state.allGuesses;
            allGuessesModified[this.state.numberOfTentatives].word = this.state.allGuesses[this.state.numberOfTentatives].word.slice(0, -1);
            this.setState({
                allGuesses: allGuessesModified
            });
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


    // TODO FIX THE BUG SOMETHING TO DO WITH INCLUDES
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

    toggleStats() {
        this.setState((prevState) => {
            return { showStats: !prevState.showStats }
        });
    }

    render() {
        if (this.state.numberOfTentatives === this.props.maxTentatives && this.state.gameOver === false) {
            this.setState({ gameOver: true })
        }
        return (
            <div className='grid place-items-center max-h-full h-full w-[500px] max-w-[500px]'>
                {this.state.showStats
                    ? <EndGameMenu
                        toggleStats={this.toggleStats.bind(this)}
                    />
                    : <span>
                        <button onClick={this.toggleStats} className='border border-[10px]'>SHOW STAS</button>
                    </span>}
                <div>
                    Word is {this.props.wordToGuess.toUpperCase()}

                    <GuessesGroup guessesArray={this.state.allGuesses} />

                    {this.state.won ?
                        <div>YES</div>
                        : <div>NO</div>
                    }
                </div>
                <div className="relative bottom-0 bg-zinc-50 dark:bg-zinc-900">
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

// TODO FIX THE GAME LOGIC - TEST WITH THE WORD RRRRR TO SEE THE BUG