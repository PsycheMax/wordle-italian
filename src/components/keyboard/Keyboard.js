import React, { Component } from 'react';
import Key from './Key';

let value = "";
class Keyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: value
        }
        this.method = this.method.bind(this);
    }

    static defaultProps = {
        key: value
    }

    method() {
        console.log(this);
    }

    render() {
        return (
            <div className='grid place-items-center '>

                <div className='text-3xl'>
                    THIS IS A KEYBOARD
                </div>

                <Key />
                <Key keyValue="b" status="greenlit" />

            </div>
        )
    }

}

export default Keyboard;