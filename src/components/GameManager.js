import React, { Component } from 'react';
import WordManager from './WordManager';
import AlertManager from './Alert';
import TopMenu from './topMenu/TopMenu';
import StatsMenuContainer from './gameOver/StatsMenuContainer';

class GameManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameWon: false,
            gameOver: false,
            showStats: false,
            showHelp: false,
            showOptions: false,
            alert: {
                visible: false,
                classList: "border-gray-300 bg-greenSuccess-500 text-slate-50 ",
                alertMessage: "Awesome!"
            },
            alertDuration: 2500
        }
        this.changeAlertContent = this.changeAlertContent.bind(this);
        this.setAlertVisibilityFalse = this.setAlertVisibilityFalse.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    static defaultProps = {

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
        if (isWon) {
            console.log("Won");
            this.toggleMenu("stats");
        } else {
            console.log("Game Ovah!");
            this.toggleMenu("stats");
        }
    }

    render() {
        return (
            <div className='grid place-items-center'>
                <TopMenu toggleStatsMethod={this.toggleMenu.bind(this, "stats")} toggleOptionsMethod={this.toggleMenu.bind(this, "options")} toggleHelpMethod={this.toggleMenu.bind(this, "help")} />

                <StatsMenuContainer showStats={this.state.showStats} toggleStatsMethod={this.toggleMenu.bind(this, "stats")} />

                <AlertManager alert={this.state.alert} />

                <div className="wrapper mt-32 justify-content mx-9 l:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">

                    <WordManager changeAlertContentMethod={this.changeAlertContent.bind(this)}
                        maxTentatives={6}
                        wordToGuess={"millo"} wordList={["tasca", "Bello", "collo", "millo"]}
                        gameWonMethod={this.gameOver.bind(this, true)}
                        gameOverMethod={this.gameOver.bind(this, false)}
                    />
                </div>

            </div>
        )
    }

}

export default GameManager;