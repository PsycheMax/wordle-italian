import React, { Component } from 'react';

class SessionManager extends Component {

    constructor(props) {
        super(props);
        this.setPropsInLocalStorage = this.setPropsInLocalStorage.bind(this);
    }

    static defaultProps = {
        stats: {
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

    setPropsInLocalStorage() {
        let stringifiedStats = JSON.stringify(this.props.stats);
        localStorage.setItem("stats", stringifiedStats);
    }

    render() {
        this.setPropsInLocalStorage();
        return (
            <div >

            </div>
        )
    }
}

export function setInStorage(key, value) {
    let stringified = JSON.stringify(value);
    console.log(stringified);
    localStorage.setItem(key, stringified);
}

export function getFromStorage(key) {
    let stringified = localStorage.getItem(key);
    let parsed = JSON.parse(stringified);
    return parsed;
}

export default SessionManager;