import React, { Component } from 'react';

class Statistics extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        playedGames: 5,
        wonGames: 2,
        maxStreak: 2,
        currentStreak: 0
    }

    calculatePercentage(value, total) {
        return ((value / total) * 100);
    }

    render() {
        return (
            <div>
                Stats
                <div className="grid grid-cols-4">
                    <div className="">
                        <div className="">
                            {this.props.playedGames}
                        </div>
                        <div className="">
                            Played
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            {this.calculatePercentage(this.props.wonGames, this.props.playedGames)}
                        </div>
                        <div className="">
                            Win %
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            {this.props.maxStreak}
                        </div>
                        <div className="">
                            Max Streak
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            {this.props.currentStreak}
                        </div>
                        <div className="">
                            Current Streak
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

export default Statistics;