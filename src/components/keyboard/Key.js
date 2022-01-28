import React, { Component } from 'react';

class Key extends Component {

    constructor(props) {
        super(props);
        this.onKeyClickCallback = this.onKeyClickCallback.bind(this);
    }

    static defaultProps = {
        keyValue: "a",
        status: "neutral", //it can be "neutral", "wrong", "correct", "correctInPlace"
        onClickCallback: "",
        specificClasses: ""
    }

    onKeyClickCallback() {
        let toSendUppercase = this.props.keyValue.toUpperCase();
        this.props.onKeyClickCallback(toSendUppercase);
    }

    classListWithLogic() {
        switch (this.props.status) {
            case "wrong":
                return " bg-greyWrong-300 text-white"
            case "correct":
                return " bg-yellowPartial-500 text-white"
            case "correctInPlace":
                return " bg-greenSuccess-500 text-white"
            case "neutral":
            default:
                return " bg-greyWrong-50 text-current " + this.props.specificClasses
        }
    }

    render() {
        return (
            <div
                onTouchEnd={this.onKeyClickCallback.bind(this)}
                onClick={this.onKeyClickCallback.bind(this)}
                className={`rounded-lg m-1 w-[3rem] h-[4rem] grid place-items-center text-base
                        ${this.classListWithLogic()}
                        `}>
                <span className='uppercase font-bold  m-auto'>{this.props.keyValue.toUpperCase()}</span>
            </div>
        )
    }

}

export default Key;