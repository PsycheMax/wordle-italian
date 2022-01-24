import React, { Component } from 'react';


class Key extends Component {

    static defaultProps = {
        keyValue: "a",
        status: "neutral",
        onClickCallback: ""
    }

    onClickCallback(letterToSend) {
        this.props.onClickCallback(letterToSend);
    }



    render() {
        return (
            <div onTouchEnd={this.onClickCallback.bind(this, this.props.keyValue)} className='border border-current/50 hover:border-current p-[2rem] dark:border-zinc-200/50 dark:hover:border-zinc-200'>
                {this.props.keyValue.toUpperCase()}
                {/* <br /> */}
                {/* {this.props.status} */}
            </div>
        )
    }

}

export default Key;