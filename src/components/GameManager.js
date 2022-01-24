import React, { Component } from 'react';
import Keyboard from './keyboard/Keyboard';
import WordManager from './word/WordManager';

class GameManager extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // this.method = this.method.bind(this);
    }

    static defaultProps = {

    }

    method() {
        console.log(this);
    }

    render() {
        return (
            <div className='grid place-items-center '>

                <div className="wrapper mt-32 justify-content mx-9 l:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">


                    <WordManager />

                    <Keyboard />
                </div>

            </div>
        )
    }

}

export default GameManager;