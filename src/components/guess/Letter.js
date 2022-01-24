import React, { Component } from 'react';

class Letter extends Component {

    static defaultProps = {
        keyValue: "a",
    }

    render() {
        return (
            <div
                className=' border border-current/50 m-1 w-24 h-24 grid place-items-center
                        hover:border-current hover:bg-indigo-500/50
                        dark:border-zinc-200/50 dark:hover:border-zinc-200 '>

                <span className='uppercase text-current font-base text-5xl m-auto'>{this.props.keyValue.toUpperCase()}</span>

            </div>
        )
    }

}

export default Letter;