import React, { Component } from 'react';

class NextGameCounter extends Component {

    static defaultProps = {
        timerEnd: ""
    }

    render() {
        return (
            <div className="text-white text-center flex flex-col">
                <div className="text-l uppercase mt-[2rem] ">
                    Prossima Parola
                </div>
                <div className="text-4xl mt-5 ">
                    11:13:14
                </div>
            </div>
        )
    }

}

export default NextGameCounter;