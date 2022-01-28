import React, { Component } from 'react';

class Letter extends Component {

    static defaultProps = {
        keyValue: "a",
        status: "neutral"
    }

    generateColor(status) {
        switch (status) {
            case "neutral":
                return " "
            case "correctInPlace":
                return "bg-greenSuccess-500"
            case "correct":
                return "bg-yellowPartial-500"
            case "wrong":
                return "bg-greyWrong-500"
            default:
                return " "
        }
    }

    render() {
        return (
            <div
                className={` border border-current/50 m-1 w-24 h-24 grid place-items-center
                        hover:border-current hover:bg-indigo-500/50
                        dark:border-zinc-200/50 dark:hover:border-zinc-200
                        ${this.generateColor(this.props.status)}
                        `}>

                <span className='uppercase text-current font-base text-5xl m-auto'>{this.props.keyValue.toUpperCase()}</span>

            </div>
        )
    }

}

export default Letter;