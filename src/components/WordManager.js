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
            gameOver: false,
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
        maxTentatives: 6,
        dataForStats: {
            playedGames: 5,
            wonGames: 2,
            maxStreak: 2,
            currentStreak: 0,
            wonWithNumberOfGuesses: {
                wonWith1: 8,
                wonWith2: 4,
                wonWith3: 0,
                wonWith4: 6,
                wonWith5: 8,
                wonWith6: 12
            }
        },
        wordList: ["tasca", "Bello", "collo"]
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
        let wordListCopy = this.props.wordList;
        let wordToFind = this.state.allGuesses[this.state.numberOfTentatives].word.toLowerCase();
        if (wordListCopy.includes(wordToFind)) {
            if (this.state.numberOfTentatives <= this.props.maxTentatives) {
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
                        lettersUsed: newLettersUsed
                    }
                })
            }
        } else {
            console.log("Not a word!");
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

    toggleStats() {
        this.setState((prevState) => {
            return { showStats: !prevState.showStats }
        });
    }

    componentDidUpdate() {
        if (this.state.won && (!this.state.gameOver && !this.state.showStats)) {
            this.setState({ gameOver: true, showStats: true })
        }
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
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6"],
                            tentatives: [
                                this.props.dataForStats.wonWithNumberOfGuesses.wonWith1,
                                this.props.dataForStats.wonWithNumberOfGuesses.wonWith2,
                                this.props.dataForStats.wonWithNumberOfGuesses.wonWith3,
                                this.props.dataForStats.wonWithNumberOfGuesses.wonWith4,
                                this.props.dataForStats.wonWithNumberOfGuesses.wonWith5,
                                this.props.dataForStats.wonWithNumberOfGuesses.wonWith6]
                        }}
                        dataForStats={this.props.dataForStats}
                    />
                    : <span>
                        <button onClick={this.toggleStats} className='border border-[10px]'>SHOW STAS</button>
                    </span>}
                <div>
                    Word is {this.props.wordToGuess.toUpperCase()}

                    <GuessesGroup guessesArray={this.state.allGuesses} />

                    {this.state.won ?
                        <div>VITTORIA YES</div>
                        : <div>VITTORIA NO</div>
                    }
                </div>

                <div className="relative bottom-0 bg-zinc-50 dark:bg-zinc-900">
                    {/* With the next check, the keyboard is deactivated in case the game is won. */}
                    {this.state.gameOver ?
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