import React, { Component } from 'react';
import GuessDistribution from './GuessDistribution';
import NextGameCounter from './NextGameCounter';
import ShareButton from './Share';
import Statistics from './Statistics';

class EndGameMenu extends Component {

    render() {
        return (
            <div>
                <div className="absolute z-10 bg-slate-900/50 top-0 left-0 w-full h-full ">
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-[28rem] h-[30rem] z-20 bg-yellow-900
                                grid grid-cols-auto
                                ">
                    <div className="absolute justify-self-end h-min text-white text-xl">X</div>
                    <div className="row text-white text-center mt-8">
                        <span className=" text-l uppercase font-bold ">
                            Statistics
                        </span>
                        <Statistics />
                    </div>
                    <div className="row text-white text-center mt-8">
                        <span className=" text-l uppercase font-bold ">
                            Guess Distribution
                        </span>
                        <GuessDistribution />
                    </div>

                    <div className="row grid grid-cols-2 ">
                        <div className="col border-r border-solid border-white">
                            <NextGameCounter />
                        </div>
                        <div className="col">
                            <ShareButton />
                        </div>
                    </div>


                </div>

            </div>
        )
    }

}

export default EndGameMenu;