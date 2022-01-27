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

    renderCouple(above, below) {
        return <div className="">
            <div className="text-4xl font-bold">
                {above}
            </div>
            <div className="font-thin text-xs">
                {below}
            </div>
        </div>
    }

    render() {
        return (
            <div className="max-w-[60%] mx-auto" >
                <div className="grid grid-cols-4">
                    {this.renderCouple(this.props.playedGames, "Partite Giocate")}
                    {this.renderCouple(this.calculatePercentage(this.props.wonGames, this.props.playedGames), "Partite Vinte")}
                    {this.renderCouple(this.props.maxStreak, "Slancio massimo")}
                    {this.renderCouple(this.props.currentStreak, "Slancio attuale")}
                </div>


            </div>
        )
    }

}

export default Statistics;