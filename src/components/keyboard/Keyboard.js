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
        lettersUsed: {
            wrongLetters: [],
            correctLetters: [], //yellow
            correctLettersInPlace: [], //green
        },
        onKeyClickCallback: "",
        onKeyboardSubmitButtonClick: "",
        onKeyboardBackspaceButtonClick: ""
    }

    onKeyClickCallback(letterToSend) {
        this.props.onKeyClickCallback(letterToSend);
    }

    onKeyboardSubmitButtonClick() {
        this.props.onKeyboardSubmitButtonClick();
    }

    onKeyboardBackspaceButtonClick() {
        this.props.onKeyboardBackspaceButtonClick();
    }

    renderRowFromString(lettersOrder) {
        let lettersToRender = lettersOrder.split("");
        return (
            <div className={`grid grid-cols-10`}>
                {lettersOrder === "zxcvbnm" ? <Key onKeyClickCallback={this.onKeyboardSubmitButtonClick.bind(this)} keyValue="INVIO" status="neutral" specificClasses="min-w-[4rem] text-sm ml-[-1rem]" /> : <span className="hidden"></span>}
                {lettersToRender.map((letter) => {
                    return <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)}
                        keyValue={letter}
                        status={this.checkKeyStatus(letter)}
                        key={letter + (Math.random() * 999).toString()}
                    />
                })}
                {lettersOrder === "zxcvbnm" ? <Key onKeyClickCallback={this.onKeyboardBackspaceButtonClick.bind(this)} keyValue="<-" specificClasses="min-w-[4rem] text-sm" status="neutral" /> : <span className="hidden"></span>}
            </div>)
    }

    checkKeyStatus(letter) {
        if (this.props.lettersUsed.correctLettersInPlace.indexOf(letter) !== -1) {
            return "correctInPlace"
        } else {
            if (this.props.lettersUsed.correctLetters.indexOf(letter) !== -1) {
                return "correct"
            } else {
                if (this.props.lettersUsed.wrongLetters.indexOf(letter) !== -1) {
                    return "wrong"
                } else {
                    return "neutral"
                }
            }
        }
    }

    render() {
        return (
            <div className='max-w-[500px]'>
                <div className=''>{this.renderRowFromString("qwertyuiop")}</div>
                <div className='relative pl-6 '>{this.renderRowFromString("asdfghjkl")}</div>
                <div className='relative pl-5 md:pl-6'>{this.renderRowFromString("zxcvbnm")}</div>
            </div>
        )
    }
}

export default Keyboard;