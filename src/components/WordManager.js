import React, { Component } from 'react';
import GuessesGroup from './guess/GuessesGroup';
import Keyboard from './keyboard/Keyboard';
import { setInStorage, getFromStorage } from './sessions/SessionManager';

let currentTentative = 0;
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
            },
            gameOver: this.props.gameOver,
            dailyStatus: {
                completedToday: true,
                beginningOfToday: "",
                beginningOfNextDay: ""
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
        wordToGuess: "DEFFO",
        maxTentatives: 6,
        wordList: ["DEFFO"],
        changeAlertContentMethod: "",
        gameWonMethod: "",
        gameOverMethod: "",
        gameOver: false
    }

    componentDidMount() {
        // Create an array of empty guesses, to fill the gameboard with empty elements
        let emptyGuesses = [];
        for (let i = 0; i < this.props.maxTentatives; i++) {
            let emptyGuess = { word: "", statusArray: [""] }
            emptyGuesses.push(emptyGuess);
        }
        // Create a new default state, to be used if there's no previous storage, and on every "new day"
        let newState = {
            won: false,
            numberOfTentatives: 0,
            allGuesses: emptyGuesses,
            lettersUsed: {
                wrongLetters: [],
                correctLetters: [],
                correctLettersInPlace: []
            },
            gameOver: false,
            dailyStatus: {
                completedToday: false,
                beginningOfToday: this.getBeginningOfToday(),
                beginningOfNextDay: this.getBeginningOfTomorrow(),
            }
        }
        // Is there a localStorage JSON object? If there is, it will be used, otherwise it will be created.
        let storageState = getFromStorage("wordManagerState");
        if (storageState !== null) {
            let rightNow = new Date();
            // If the code is executed on a later date than the last "next day" in storage, the state will be reset via the previous newState JSON Obj.
            if (rightNow.getTime() >= storageState.dailyStatus.beginningOfNextDay) {
                this.setState((prevState) => {
                    setInStorage("wordManagerState", newState);
                    return newState;
                })
            } else {
                // If the code is executed during the same day of the last played game, the state will be set from the storage.
                this.setState({ ...storageState });
            }
        } else {
            this.setState((prevState) => {
                setInStorage("wordManagerState", newState);
                return newState;
            })
        }
    }

    handleSubmit() {
        // Can we still submit?
        if (this.state.numberOfTentatives < this.props.maxTentatives) {
            let wordListCopy = this.props.wordList;
            // Lowercase everything in the wordList, just in case.
            for (let i = 0; i < wordListCopy.length; i++) {
                const word = wordListCopy[i];
                wordListCopy[i] = word.toLowerCase().trim();
            }
            // wordToFind is taken from the allGuesses array, and again lowercased just in case
            let wordToFind = this.state.allGuesses[this.state.numberOfTentatives].word.toLowerCase();
            // if the word is a valid word, according to the dicitonary
            if (wordListCopy.includes(wordToFind)) {
                // Create a new guess JSON Obj, containing a word and an array of stati  (for the word coloring)
                let guess = {
                    word: this.state.allGuesses[this.state.numberOfTentatives].word,
                    statusArray: this.createStatusArray(this.state.allGuesses[this.state.numberOfTentatives].word)
                };
                // The word submitted must be added to the allGuesses state of this component.
                this.setState((prevState) => {
                    let newAllGuesses = prevState.allGuesses;
                    newAllGuesses[this.state.numberOfTentatives] = guess;
                    // check which letters have been used, for the keyboard coloring
                    let newLettersUsed = this.handleKeyColoring(guess.word);
                    // Check if the word is the winning guess
                    let isItWon = guess.word.toLowerCase() === this.props.wordToGuess.toLowerCase();
                    // Increase the current tentative variable, in case the game was not won
                    currentTentative = isItWon ? prevState.numberOfTentatives : prevState.numberOfTentatives + 1;
                    // The newState JSON object has been created because it will have to be written in the localstorage, for STATS purposes
                    let newState = {
                        ...prevState,
                        won: isItWon,
                        allGuesses: newAllGuesses,
                        numberOfTentatives: isItWon ? prevState.numberOfTentatives : prevState.numberOfTentatives + 1,
                        lettersUsed: newLettersUsed,
                        gameOver: (this.state.numberOfTentatives + 1 === this.props.maxTentatives),
                        dailyStatus: {
                            // If the game was won on this submit, it's completed today
                            // If the game is over because the number of Tentatives is equal to the maximum, then it's completed today
                            completedToday: isItWon ? true : (this.state.numberOfTentatives + 1 === this.props.maxTentatives),
                            beginningOfToday: this.getBeginningOfToday(),
                            beginningOfNextDay: this.getBeginningOfTomorrow()
                        }
                    };
                    setInStorage("wordManagerState", newState);
                    return newState;
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

    /**
     * This handles the keyboard coloring.
     * @param {string} guessWord is the guess submitted by the user, to be used as a coloring reference
     * @returns an array of three different arrays: "correctLettersInPlace" to be colored in green, "correctLetters" to be colored in yellow, "wrongLetters" to be colored in grey
     */
    handleKeyColoring(guessWord) {
        // the existing calculations are used as a base
        let newLettersUsed = this.state.lettersUsed;
        // the target solution will be split in different chars
        let solutionLettersArray = this.props.wordToGuess.toString().toLowerCase().split("");
        // the user guess will be split in different chars in a new array
        let guessLettersArray = guessWord.toString().toLowerCase().split("");
        for (let i = 0; i < guessLettersArray.length; i++) {
            const guessLetter = guessLettersArray[i];
            // if the letter is in the same position in both the guessArray and the solutionArray, it'll be a correctLetterInPlace
            if (guessLetter === solutionLettersArray[i]) {
                newLettersUsed.correctLettersInPlace.push(guessLetter);
            } else {
                // otherwise:  if the letter is included in the solutionArray, it'll be a correctLetter - else, it'll be a wrongLetter
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

    /**
     * It takes a string and converts it in an array of stings, via the following function
     * @param {string} guessWord s the guess submitted by the user, to be used as a coloring reference
     * @returns an array of different status for each letter used in the guess
     */
    createStatusArray(guessWord) {
        let guessLettersArray = guessWord.toString().toLowerCase().split("");
        let solutionLettersArray = this.props.wordToGuess.toString().toLowerCase().split("");
        let statusArray = [];
        // Iterating in the guessArray, every letter will be compared to the solution, to discover whether they are "correct", "correctInPlace" or "wrong"
        for (let i = 0; i < guessLettersArray.length; i++) {
            statusArray.push(this.compareCharacterToArray(guessLettersArray, i, solutionLettersArray));
        }
        return statusArray;
    }

    /**
     * compareCharacterToArray takes an array of letters, and compares it to a second array, to discover which letters are in the correct place.
     * @param {*} guessArray is the array of letters (String.split("") result) used to check which letters of it are in the correct spot
     * @param {*} index for the iteration
     * @param {*} solutionArray is the array of letters used as a solution, as a comparison target for the guessArray
     * @returns 
     */
    compareCharacterToArray(guessArray, index, solutionArray) {
        // This solution was created to make sure that misplaced letters are ALWAYS compared to the rest of the word, in case there's two identical letters in different spots
        for (let j = 0; j < solutionArray.length; j++) {
            // In case the letter is in the correct spot (that's why we needed the original index, used in the iteration in the previous function createStatusArray),
            //  it'll be a correctInPlace letter, and the soltuion will lose that letter. This simple trick ensures that double letters (like the L in BELLA) will be 
            // properly evaluated in every itearion
            if (guessArray[index] === solutionArray[index]) {
                solutionArray[index] = " ";
                return "correctInPlace";
            } else {
                // ONLY if the letter wasn't in the correct spot, it'll get a status of "wrong" or "correct" accordingly
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

    getBeginningOfToday() {
        let today = new Date();
        // Set the time of the day to 00:00:00
        today.setHours(0, 0, 0, 0);
        return today.getTime();
    }

    getBeginningOfTomorrow() {
        let nextDay = new Date();
        // Set the date to tomorrow
        nextDay.setDate(nextDay.getDate() + 1);
        // Set the time of the day to 00:00:00
        nextDay.setHours(0, 0, 0, 0);
        return nextDay.getTime();
    }

    componentDidUpdate() {
        // if the game is won, call the GameManager.gameWon method
        if (this.state.won) {
            this.props.gameWonMethod();
            // Avoid winning state loops with the following lines
            let newState = this.state;
            newState.won = false;
            setInStorage("wordManagerState", newState);
            this.setState({ won: false })
        } else {
            // otherwise, if the game is not won but it's "gameOver", call the GameManager.gameOver method. And then reset "gameOver" in the state, to avoid eternal loops
            if (this.state.gameOver) {
                this.props.gameOverMethod();
                this.setState({ gameOver: false })
            }
        }
    }

    render() {
        return (
            <main className='sm:w-[500px] max-w-[500px] grid sm:place-items-center h-[100%]'>
                <div className='flex flex-auto justify-center items-center sm:mt-9 guesses-group-container'>
                    <GuessesGroup guessesArray={this.state.allGuesses} />
                </div>
                <div className='absolute bottom-0 left-0 sm:left-auto bg-zinc-50 dark:bg-zinc-900'>
                    Word is {this.props.wordToGuess.toUpperCase()}
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

            </main>
        )
    }
}

export default WordManager;
export { currentTentative };