import React, { Component } from 'react';

class Letter extends Component {

    static defaultProps = {
        keyValue: "a",
        status: "neutral"
    }

    generateColor(status) {
        switch (status) {
            case "neutral":
                return `border border-greyWrong-500/50 dark:border-greyWrong-200/50 `
            case "correctInPlace":
                return "bg-greenSuccess-500"
            case "correct":
                return "bg-yellowPartial-500"
            case "wrong":
                return "bg-greyWrong-400"
            default:
                return " "
        }
    }

    render() {
        return (
            <div
                className={`m-1 w-16 h-16 grid place-items-center
                        ${this.generateColor(this.props.status)}
                        `}>

                <span className='uppercase font-bold text-3xl m-auto text-greyWrong-50'>{this.props.keyValue.toUpperCase()}</span>

            </div>
        )
    }

}

export default Letter;