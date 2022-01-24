import React, { Component } from 'react';
import Key from './Key';

class Keyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        }
        this.onKeyClickCallback = this.onKeyClickCallback.bind(this);
    }

    static defaultProps = {
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

    render() {
        return (
            <div className='grid grid-cols-1 '>
                <div className="row grid grid-cols-10">
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="q" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="w" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="e" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="r" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="t" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="y" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="u" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="i" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="o" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="p" status="greenlit" />
                </div>
                <div className="row grid grid-cols-9">
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="a" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="s" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="d" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="f" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="g" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="h" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="j" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="k" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="l" status="greenlit" />
                </div>
                <div className="row grid grid-cols-7">
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="z" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="x" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="c" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="v" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="b" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="n" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyClickCallback.bind(this)} keyValue="m" status="greenlit" />
                </div>
                <div className="row grid grid-cols-2">
                    <Key onKeyClickCallback={this.onKeyboardSubmitButtonClick.bind(this)} keyValue="Submit" status="greenlit" />
                    <Key onKeyClickCallback={this.onKeyboardBackspaceButtonClick.bind(this)} keyValue="<-" status="greenlit" />
                </div>


            </div>
        )
    }

}

export default Keyboard;