import React, { Component } from 'react';
import Key from './Key';

class Keyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        }
        this.onKeyClickCallback = this.onKeyClickCallback.bind(this);
        this.onKeyboardSubmitButtonClick = this.onKeyboardSubmitButtonClick.bind(this);
        this.onKeyboardSubmitButtonClick = this.onKeyboardSubmitButtonClick.bind(this);
        this.renderRowFromString = this.renderRowFromString.bind(this);
        this.checkKeyStatus = this.checkKeyStatus.bind(this);
    }

    static defaultProps = {
        lettersUsed: [""],
        wrongLetters: [],
        correctLetters: [], //yellow
        correctLettersInPlace: [], //green
        onKeyClickCallback: "",
        onKeyboardSubmitButtonClick: "",
        onKeyboardBackspaceButtonClick: ""
    }

    onKeyClickCallback(letterToSend) {
        console.log("In KEYBOARD - CALLBACK");
        this.props.onKeyClickCallback(letterToSend);
    }

    onKeyboardSubmitButtonClick() {
        console.log("In KEYBOARD - CALLBACK");
        this.props.onKeyboardSubmitButtonClick();
    }

    onKeyboardBackspaceButtonClick() {
        console.log("In KEYBOARD - CALLBACK");
        this.props.onKeyboardBackspaceButtonClick();
    }

    renderRowFromString(lettersOrder) {
        let lettersToRender = lettersOrder.split("");
        return (
            <div className={`row grid grid-cols-${lettersToRender.length}`}>
                {lettersToRender.map((letter) => {
                    return <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)}
                        keyValue={letter}
                        status={this.checkKeyStatus(letter)}
                        key={letter + (Math.random() * 999).toString()}
                    />
                })}
            </div>)
    }

    checkKeyStatus(letter) {
        if (this.props.correctLettersInPlace.indexOf(letter) !== -1) {
            return "correctInPlace"
        } else {
            if (this.props.correctLetters.indexOf(letter) !== -1) {
                return "correct"
            } else {
                if (this.props.wrongLetters.indexOf(letter) !== -1) {
                    return "wrong"
                } else {
                    return "neutral"
                }
            }
        }
    }

    render() {
        return (
            <div className='grid grid-cols-1 '>
                {this.renderRowFromString("qwertyuiop")}
                {this.renderRowFromString("asdfghjkl")}
                {this.renderRowFromString("zxcvbnm")}

                <div className="row grid grid-cols-2">
                    <Key onKeyClickCallback={this.onKeyboardSubmitButtonClick.bind(this)} keyValue="Submit" status="neutral" />
                    <Key onKeyClickCallback={this.onKeyboardBackspaceButtonClick.bind(this)} keyValue="<-" status="neutral" />
                </div>

            </div>
        )
    }
}

export default Keyboard;