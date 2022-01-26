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

    renderField(above, below) {
        return <div className="">
            <div className="text-4xl">
                {above}
            </div>
            <div className="text-sm">
                {below}
            </div>
        </div>
    }

    render() {
        return (
            <div>
                <div className="grid grid-cols-4 mt-2 max-w-xs mx-auto">
                    {this.renderField(this.props.playedGames, "Partite completate")}
                    {this.renderField(this.calculatePercentage(this.props.wonGames, this.props.playedGames), "% Vittorie")}
                    {this.renderField(this.props.maxStreak, "Max Streak")}
                    {this.renderField(this.props.currentStreak, "Current Streak")}
                </div>
            </div>
        )
    }

}

export default Statistics;