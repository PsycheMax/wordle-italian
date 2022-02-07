import React, { Component } from 'react';
import EndGameMenu from './EndGameMenu';

class StatsMenuContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static defaultProps = {
        showStats: false,
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
        toggleStatsMethod: ""
    }


    render() {
        return (
            <div >

                {this.props.showStats
                    ? <EndGameMenu
                        toggleStats={this.props.toggleStatsMethod}
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
                    : <span></span>}

            </div>
        )
    }

}

export default StatsMenuContainer;

