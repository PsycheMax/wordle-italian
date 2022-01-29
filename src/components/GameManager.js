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
            <div className='grid place-items-center'>

                <div className="wrapper mt-32 justify-content mx-9 l:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">


                    <WordManager maxTentatives={6} wordToGuess={"millo"} />
                </div>

            </div>
        )
    }

}

export default GameManager;