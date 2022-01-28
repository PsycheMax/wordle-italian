import React, { Component } from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const renderer = ({ hours, minutes, seconds }) => (
    <span>
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
);

class NextGameCounter extends Component {

    static defaultProps = {
        timerEnd: "00.00.00"
    }

    getTomorrow() {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 1);
        return tomorrow;
    }

    render() {
        return (
            <div className="text-center flex flex-col">
                <div className="text-l uppercase mt-8 font-bold ">
                    Prossima Parola
                </div>
                <div className="text-4xl ">
                    <Countdown date={this.getTomorrow()} zeroPadTime={2} renderer={renderer} />
                </div>
            </div>
        )
    }

}

export default NextGameCounter;