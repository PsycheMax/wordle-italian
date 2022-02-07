import React, { Component } from 'react';
import StatsMenu from './StatsMenu';

class StatsMenuContainer extends Component {

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
        toggleStatsMethod: "",
        gameOver: false,
        copyStatusToClipboardMethod: ""
    }

    render() {
        return (
            <span >

                {this.props.showStats
                    ? <StatsMenu
                        toggleStatsMethod={this.props.toggleStatsMethod}
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
                        gameOver={this.props.gameOver}
                        copyStatusToClipboardMethod={this.props.copyStatusToClipboardMethod}
                    />
                    : <span></span>}

            </span>
        )
    }

}

export default StatsMenuContainer;

