import React, { Component } from 'react';
import WordManager from './WordManager';

class GameManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameWon: false
        }
        // this.method = this.method.bind(this);
    }

    static defaultProps = {

    }

    method() {
        // console.log(this);
    }

    render() {
        return (
            <div className='grid place-items-center bg-zinc-50 dark:bg-zinc-900'>

                <div className="wrapper mt-32 justify-content mx-9 l:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">


                    <WordManager maxTentatives={3} wordToGuess={"Franc"} />
                </div>

            </div>
        )
    }

}

export default GameManager;