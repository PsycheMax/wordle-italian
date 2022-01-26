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
                                w-[28rem] h-[30rem] z-20 bg-red-900
                                grid grid-cols-auto
                                "> {/* place-items-center */}
                    <div className="absolute justify-self-end h-min text-white text-xl">X</div>
                    <div className="row text-white text-center mt-8">
                        <span className=" text-l uppercase">
                            Statistics
                        </span>
                        <EndGameMenu />
                    </div>
                    <div className="row text-white text-center mt-8">
                        <span className=" text-l uppercase">
                            Guess Distribution
                        </span>
                        <GuessDistribution />
                    </div>

                    <div className="row grid grid-cols-2 pt-9">
                        <div className="col">
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