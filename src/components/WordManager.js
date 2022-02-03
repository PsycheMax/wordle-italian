import React, { Component } from 'react';
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
        maxTentatives: 6,
        wordList: ["tasca", "Bello", "collo", "millo"],
        changeAlertContentMethod: "",
        gameWonMethod: "",
        gameOverMethod: "",
        gameOver: false
    }

    componentDidMount() {
        let emptyGuesses = [];
        for (let i = 0; i < this.props.maxTentatives; i++) {
            let emptyGuess = { word: "", statusArray: [""] }
            emptyGuesses.push(emptyGuess);
        }
        this.setState({
            allGuesses: emptyGuesses
        })
    }

    handleSubmit() {
        if (this.state.numberOfTentatives < this.props.maxTentatives) {
            let wordListCopy = this.props.wordList;
            for (let i = 0; i < wordListCopy.length; i++) {
                const word = wordListCopy[i];
                wordListCopy[i] = word.toLowerCase().trim();
            }
            console.log(wordListCopy);
            let wordToFind = this.state.allGuesses[this.state.numberOfTentatives].word.toLowerCase();
            console.log(wordToFind);
            if (wordListCopy.includes(wordToFind)) {
                // if (true) {
                let guess = {
                    word: this.state.allGuesses[this.state.numberOfTentatives].word,
                    statusArray: this.createStatusArray(this.state.allGuesses[this.state.numberOfTentatives].word)
                };
                this.setState((prevState) => {
                    let newAllGuesses = prevState.allGuesses;
                    newAllGuesses[this.state.numberOfTentatives] = guess;
                    let newLettersUsed = this.handleKeyColoring(guess.word);
                    let isItWon = guess.word.toLowerCase() === this.props.wordToGuess.toLowerCase();
                    return {
                        won: isItWon,
                        allGuesses: newAllGuesses,
                        numberOfTentatives: prevState.numberOfTentatives + 1,
                        lettersUsed: newLettersUsed,
                        gameOver: (this.state.numberOfTentatives + 1 === this.props.maxTentatives),
                    }
                })
            } else {
                this.props.changeAlertContentMethod("alert", "Parola non valida");
                console.log("Not a word!");
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

    compareCharacterToArray(guessArray, index, solutionArray) {
        for (let j = 0; j < solutionArray.length; j++) {
            if (guessArray[index] === solutionArray[index]) {
                solutionArray[index] = " ";
                return "correctInPlace";
            } else {
                if (guessArray[index] === solutionArray[j]) {
                    if (guessArray[j] === solutionArray[j]) {
                        return "wrong";
                    }
                    return "correct";
                }
            }
        }
        return "wrong";
    }

    componentDidUpdate() {
        if (this.state.won) {
            this.props.gameWonMethod();
        } else {
            if (this.state.gameOver) {
                this.props.gameOverMethod();
                this.setState({ gameOver: false })
            }
        }
    }

    render() {

        return (
            <div className='grid place-items-center max-h-full h-full w-[500px] max-w-[500px]'>
                <div>
                    Word is {this.props.wordToGuess.toUpperCase()}

                    <GuessesGroup guessesArray={this.state.allGuesses} />

                    {this.state.won ?
                        <div>VITTORIA YES</div>
                        : <div>VITTORIA NO</div>
                    }
                </div>

                <div className="absolute bottom-0 bg-zinc-50 dark:bg-zinc-900 sm:max-h-20%">
                    {/* With the next check, the keyboard is deactivated in case the game is won. */}
                    {this.props.gameOver ?
                        <Keyboard lettersUsed={this.state.lettersUsed} />
                        : <Keyboard
                            lettersUsed={this.state.lettersUsed}
                            onKeyClickCallback={this.onKeyboardClick}
                            onKeyboardSubmitButtonClick={this.onKeyboardSubmitButtonClick}
                            onKeyboardBackspaceButtonClick={this.onKeyboardBackspaceButtonClick}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default WordManager;