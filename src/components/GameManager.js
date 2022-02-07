import React, { Component } from 'react';

import WordManager, { currentTentative } from './WordManager';

import AlertManager from './Alert';
import TopMenu from './topMenu/TopMenu';
import StatsMenuContainer from './topMenu/statsMenu/StatsMenuContainer';
import APIManager from './api/APIManager';
import SessionManager, { getFromStorage, setInStorage } from './sessions/SessionManager';
import HelpMenu from './topMenu/helpMenu/HelpMenu';
import OptionsMenu from './topMenu/optionsMenu/OptionsMenu';


class GameManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameWon: false,
            gameOver: false,
            showStats: false,
            showHelp: localStorage.getItem("stats") ? false : true,
            showOptions: false,
            alert: {
                visible: false,
                classList: "border-gray-300 bg-greenSuccess-500 text-slate-50 ",
                alertMessage: "Awesome!"
            },
            alertDuration: 2500,
            wordList: [],
            wordToGuess: "",
            // It checks if there's a localStorage file - if not, it gives an empty localStorage
            stats: localStorage.getItem("stats") ? getFromStorage("stats") : {
                playedGames: 0,
                wonGames: 0,
                maxStreak: 0,
                currentStreak: 0,
                wonWithNumberOfGuesses: {
                    wonWith1: 0,
                    wonWith2: 0,
                    wonWith3: 0,
                    wonWith4: 0,
                    wonWith5: 0,
                    wonWith6: 0
                }
            }
        }
        this.changeAlertContent = this.changeAlertContent.bind(this);
        this.setAlertVisibilityFalse = this.setAlertVisibilityFalse.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.copyStatusToClipboard = this.copyStatusToClipboard.bind(this);
        this.checkIfShareButtonIsAvailable = this.checkIfShareButtonIsAvailable.bind(this);
    }

    toggleMenu(targetMenu) {
        switch (targetMenu) {
            case "stats":
                this.setState((prevState) => {
                    return { showStats: !prevState.showStats }
                });
                break;
            case "options":
                this.setState((prevState) => {
                    return { showOptions: !prevState.showOptions }
                });
                break;
            case "help":
                this.setState((prevState) => {
                    return { showHelp: !prevState.showHelp }
                });
                break;
            default:
                break;
        }
    }


    /**
     * 
     * @param {string} type The cases are: "alert", "success", "error"
     * @param {*} duration in MS
     * @param {*} message The message to flash in the alert
     */
    changeAlertContent(type, message) {
        type = type.toLowerCase().toString();
        let toReturn = {
            visible: true,
            alertMessage: message,
        };
        switch (type) {
            case "alert":
                toReturn.classList = "border-yellowPartial-300 bg-yellowPartial-500 text-slate-50 ";
                break;

            case "success":
                toReturn.alertMessage = "border-greenSuccess-300 bg-greenSuccess-500 text-slate-50 ";
                break;

            case "error":
                toReturn.classList = "border-greyWrong-300 bg-greyWrong-500 text-slate-50 ";
                break;

            default:
                toReturn.classList = "border-gray-300 bg-white text-slate-900"
                break;
        }
        this.setState((prevState) => {
            return { alert: toReturn }
        })
        setTimeout(this.setAlertVisibilityFalse, this.state.alertDuration);
    }

    setAlertVisibilityFalse() {
        this.setState((prevState) => {
            return {
                ...prevState,
                alert: {
                    ...prevState.alert,
                    visible: false
                }
            }
        })
    }

    gameOver(isWon) {
        if (!this.state.gameOver) {
            if (isWon) {
                console.log("Won");
                this.setState((prevState) => {
                    let localWonWithNumberOfGuesses = prevState.stats.wonWithNumberOfGuesses;
                    switch (currentTentative) {
                        case 0:
                            localWonWithNumberOfGuesses = {
                                ...localWonWithNumberOfGuesses,
                                wonWith1: localWonWithNumberOfGuesses.wonWith1 + 1
                            }
                            break;
                        case 1:
                            localWonWithNumberOfGuesses = {
                                ...localWonWithNumberOfGuesses,
                                wonWith2: localWonWithNumberOfGuesses.wonWith2 + 1
                            }
                            break;
                        case 2:
                            localWonWithNumberOfGuesses = {
                                ...localWonWithNumberOfGuesses,
                                wonWith3: localWonWithNumberOfGuesses.wonWith3 + 1
                            }
                            break;
                        case 3:
                            localWonWithNumberOfGuesses = {
                                ...localWonWithNumberOfGuesses,
                                wonWith4: localWonWithNumberOfGuesses.wonWith4 + 1
                            }
                            break;
                        case 4:
                            localWonWithNumberOfGuesses = {
                                ...localWonWithNumberOfGuesses,
                                wonWith5: localWonWithNumberOfGuesses.wonWith5 + 1
                            }
                            break;
                        case 5:
                            localWonWithNumberOfGuesses = {
                                ...localWonWithNumberOfGuesses,
                                wonWith6: localWonWithNumberOfGuesses.wonWith6 + 1
                            }
                            break;
                        default:
                            break;
                    }
                    return {
                        gameOver: true,
                        gameWon: true,
                        stats: {
                            playedGames: prevState.stats.playedGames + 1,
                            wonGames: prevState.stats.wonGames + 1,
                            currentStreak: prevState.stats.currentStreak + 1,
                            maxStreak: prevState.stats.maxStreak + 1 >= prevState.stats.currentStreak + 1 ? prevState.stats.currentStreak + 1 : prevState.stats.maxStreak,
                            wonWithNumberOfGuesses: localWonWithNumberOfGuesses
                        }
                    }
                });
                this.toggleMenu("stats");
            } else {
                console.log("Game Ovah!");
                this.setState((prevState) => {
                    return {
                        gameOver: true,
                        gameWon: false,
                        stats: {
                            ...prevState.stats,
                            playedGames: prevState.stats.playedGames + 1,
                            currentStreak: prevState.stats.currentStreak
                        }
                    }
                }
                );
                this.toggleMenu("stats");
            }
        }
    }

    setWordsListInState(targetArray) {
        this.setState({ wordList: targetArray });
    }

    setWordToGuess(newWordToGuess) {
        this.setState({ wordToGuess: newWordToGuess });
    }

    async copyStatusToClipboard() {
        let localStorageData = getFromStorage("wordManagerState");
        if (localStorageData !== null) {
            let stringToReturn = "";
            localStorageData.allGuesses.forEach(guess => {
                if (guess.word.length === 5) {
                    guess.statusArray.forEach((statusString, statusIndex) => {
                        switch (statusString) {
                            case "correctInPlace":
                                stringToReturn = stringToReturn.concat("🟩")
                                break;
                            case "correct":
                                stringToReturn = stringToReturn.concat("🟨")
                                break;
                            case "wrong":
                                stringToReturn = stringToReturn.concat("⬛")
                                break;
                            default:
                                break;
                        }
                        if (statusIndex === 4) {
                            stringToReturn = stringToReturn.concat(`\r\n`);
                        }
                    });
                }
            });
            stringToReturn = stringToReturn.concat(`\r\n`);
            let rightNow = new Date();
            // let dateString = `${rightNow.getDate()} - ${rightNow.getUTCMonth()} - ${rightNow.getFullYear()}`;
            let dateString = rightNow.toDateString();
            dateString = dateString.substring(4);
            stringToReturn = stringToReturn.concat(`Wordle in Italiano - risultati del ${dateString}`);
            console.log(stringToReturn);
            await this.copyToClipboard(stringToReturn);
            // await window.navigator.clipboard.writeText(stringToReturn);
            console.log(stringToReturn);
        }
    }

    // return a promise
    copyToClipboard(textToCopy) {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            return navigator.clipboard.writeText(textToCopy);
        } else {
            // text area trick
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            });
        }
    }

    checkIfShareButtonIsAvailable() {
        let localStorageData = getFromStorage('wordManagerState');
        let result = false;
        if (localStorageData !== null) {
            if (localStorageData.dailyStatus.completedToday) {
                result = true;
            } else {
                result = this.state.gameOver;
            }
        }
        return result;
    }

    render() {
        return (
            <div className='grid sm:place-items-center md:mx-0'>
                <APIManager setWordsListInStateMethod={this.setWordsListInState.bind(this)} wordList={this.state.wordList} setWordToGuessMethod={this.setWordToGuess.bind(this)} />

                <TopMenu toggleStatsMethod={this.toggleMenu.bind(this, "stats")} toggleOptionsMethod={this.toggleMenu.bind(this, "options")} toggleHelpMethod={this.toggleMenu.bind(this, "help")} />

                <StatsMenuContainer showStats={this.state.showStats} toggleStatsMethod={this.toggleMenu.bind(this, "stats")}
                    dataForStats={this.state.stats}
                    gameOver={this.checkIfShareButtonIsAvailable()} copyStatusToClipboardMethod={this.copyStatusToClipboard.bind(this)} />

                <HelpMenu showHelp={this.state.showHelp} toggleHelpMethod={this.toggleMenu.bind(this, "help")} />
                <OptionsMenu showOptions={this.state.showOptions} toggleOptionsMethod={this.toggleMenu.bind(this, "options")} />
                <AlertManager alert={this.state.alert} />

                <SessionManager stats={this.state.stats} />

                <div className="wrapper sm:justify-content md:mx-9 l:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">

                    <WordManager changeAlertContentMethod={this.changeAlertContent.bind(this)}
                        maxTentatives={6}
                        wordToGuess={this.state.wordToGuess} wordList={this.state.wordList}
                        gameWonMethod={this.gameOver.bind(this, true)}
                        gameOverMethod={this.gameOver.bind(this, false)}
                        gameOver={this.state.gameOver}
                    />
                </div>

            </div>
        )
    }

}

export default GameManager;