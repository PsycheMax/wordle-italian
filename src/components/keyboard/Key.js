import React, { Component } from 'react';

class Key extends Component {

    constructor(props) {
        super(props);
        this.onKeyClickCallback = this.onKeyClickCallback.bind(this);
    }

    static defaultProps = {
        keyValue: "a",
        status: "neutral", //it can be "neutral", "wrong", "correct", "correctInPlace"
        onClickCallback: ""
    }

    onKeyClickCallback() {
        console.log("In KEY - CALLBACK");
        let toSendUppercase = this.props.keyValue.toUpperCase();
        this.props.onKeyClickCallback(toSendUppercase);
    }

    classListWithLogic() {
        switch (this.props.status) {
            case "wrong":
                return " bg-red-800"
                break;
            case "correct":
                return " bg-yellow-800"
                break;
            case "correctInPlace":
                return " bg-green-800"
                break;
            case "neutral":
            default:
                return " "
                break;
        }
    }

    render() {
        return (
            <div
                onTouchEnd={this.onKeyClickCallback.bind(this)}
                onClick={this.onKeyClickCallback.bind(this)}
                className={`border border-current/50 m-1 w-[4rem] h-[4rem] grid place-items-center
                        hover:border-current hover:bg-indigo-500/50
                        dark:border-zinc-200/50 dark:hover:border-zinc-200
                        ${this.classListWithLogic()}
                        `}
            >

                <span className='uppercase text-current font-base text-3xl m-auto'>{this.props.keyValue.toUpperCase()}</span>

            </div>
        )
    }

}

export default Key;