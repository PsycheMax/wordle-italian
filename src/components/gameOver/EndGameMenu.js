import React, { Component } from 'react';
import GuessDistribution from './GuessDistribution';
import NextGameCounter from './NextGameCounter';
import ShareButton from './Share';
import Statistics from './Statistics';
import { ReactComponent as CloseIcon } from './x.svg';

class EndGameMenu extends Component {

    static defaultProps = {
        dataForStats: {
            playedGames: 5,
            wonGames: 2,
            maxStreak: 2,
            currentStreak: 0,
        },
        data: {
            labels: ["1", "2", "3", "4", "5", "6"],
            tentatives: [5, 3, 0, 4, 8, 12]
        },
        toggleStats: ""
    }

    render() {
        return (
            <div>
                <div className="absolute z-10 bg-slate-900/50 top-0 left-0 w-full h-full ">
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-[28rem] h-[30rem] z-20 dark:bg-neutral-800 bg-neutral-50
                                grid grid-cols-auto
                                drop-shadow-2xl rounded-lg
                                ">
                    <div className="absolute justify-self-end h-min pr-5 pt-4 text-neutral-500" onClick={this.props.toggleStats}>
                        <CloseIcon />
                    </div>
                    <div className="row dark:text-neutral-50 text-neutral-800 text-center mt-8">
                        <span className=" text-l uppercase font-bold ">
                            Statistics
                        </span>
                        <Statistics playedGames={this.props.dataForStats.playedGames} wonGames={this.props.dataForStats.wonGames} maxStreak={this.props.dataForStats.maxStreak} currentStreak={this.props.dataForStats.currentStreak} />
                    </div>
                    <div className="row dark:text-white text-neutral-800 text-center mt-8 px-3 mr-2">
                        <span className=" text-l uppercase font-bold ">
                            Guess Distribution
                        </span>
                        <GuessDistribution data={this.props.data} />
                    </div>

                    <div className="row grid grid-cols-2 ">
                        <div className="col border-r border-solid dark:border-white border-neutral-800 text-neutral-800 dark:text-neutral-50">
                            <NextGameCounter />
                        </div>
                        <div className="col">
                            <ShareButton />
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default EndGameMenu;