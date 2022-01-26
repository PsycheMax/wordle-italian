import React, { Component } from 'react';

class Statistics extends Component {

    static defaultProps = {
        keyValue: "a",
        status: "neutral"
    }

    render() {
        return (
            <div>
                Stats
                <div className="grid grid-cols-4">
                    <div className="">
                        <div className="">
                            1
                        </div>
                        <div className="">
                            Played
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            100
                        </div>
                        <div className="">
                            Win %
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            1
                        </div>
                        <div className="">
                            Max Streak
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            1
                        </div>
                        <div className="">
                            Current Streak
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

export default Statistics;