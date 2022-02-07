import React, { Component } from 'react';

class Statistics extends Component {

    static defaultProps = {
        stats: {
            playedGames: 0,
            wonGames: 0,
            maxStreak: 0,
            currentStreak: 0
        }
    }

    calculatePercentage(value, total) {
        let result = ((value / total) * 100);
        isNaN(result) ? result = 0 : result.valueOf();
        return Math.round(result * 10) / 10;
    }

    renderCouple(above, below) {
        return <div className="">
            <div className="text-4xl font-bold">
                {above}
            </div>
            <div className="font-base text-xs">
                {below}
            </div>
        </div>
    }

    render() {
        return (
            <div className="max-w-[60%] mx-auto" >
                <div className="grid grid-cols-4">
                    {this.renderCouple(this.props.stats.playedGames, "Partite Giocate")}
                    {this.renderCouple(this.calculatePercentage(this.props.stats.wonGames, this.props.stats.playedGames), "% Vittorie")}
                    {this.renderCouple(this.props.stats.maxStreak, "Slancio massimo")}
                    {this.renderCouple(this.props.stats.currentStreak, "Slancio attuale")}
                </div>


            </div>
        )
    }

}

export default Statistics;