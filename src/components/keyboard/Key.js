import React, { Component } from 'react';


class Key extends Component {

    constructor(props) {
        super(props);
        this.onKeyClickCallback = this.onKeyClickCallback.bind(this);
    }

    static defaultProps = {
        keyValue: "a",
        status: "neutral",
        onClickCallback: ""
    }

    onKeyClickCallback() {
        console.log("In KEY - CALLBACK");
        let toSendUppercase = this.props.keyValue.toUpperCase();
        this.props.onKeyClickCallback(toSendUppercase);
    }



    render() {
        return (
            <div
                onTouchEnd={this.onKeyClickCallback.bind(this)}
                onClick={this.onKeyClickCallback.bind(this)}
                className=' border border-current/50 m-1 w-24 h-24 grid place-items-center
                        hover:border-current hover:bg-indigo-500/50
                        dark:border-zinc-200/50 dark:hover:border-zinc-200 '>

                <span className='uppercase text-current font-base text-5xl m-auto'>{this.props.keyValue.toUpperCase()}</span>

            </div>
        )
    }

}

export default Key;