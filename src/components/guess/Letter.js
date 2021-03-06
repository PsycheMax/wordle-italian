import React, { Component } from 'react';

class Letter extends Component {

    static defaultProps = {
        keyValue: "a",
        status: "neutral"
    }

    generateColor(status) {
        switch (status) {
            case "correctInPlace":
                return "bg-greenSuccess-500 text-zinc-50"
            case "correct":
                return "bg-yellowPartial-500 text-zinc-50"
            case "wrong":
                return "bg-greyWrong-400 text-zinc-50"
            default:
            case "neutral":
                return `border-2 border-greyWrong-500/50 dark:border-greyWrong-200/50 text-zinc-800 dark:text-zinc-100 `

        }
    }

    render() {
        return (
            <div
                className={`m-1 w-16 h-16 grid place-items-center guesses-group-single-letter 
                        ${this.generateColor(this.props.status)}
                        `}>

                <span className='uppercase font-bold text-3xl m-auto '>{this.props.keyValue.toUpperCase()}</span>

            </div>
        )
    }

}

export default Letter;