import React, { Component } from 'react';
import { ReactComponent as CloseIcon } from '../statsMenu/x.svg';

class HelpMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static defaultProps = {
        toggleStatsMethod: "",
        toggleOptionsMethod: "",
        toggleHelpMethod: ""
    }


    render() {
        return (
            <div>
                {this.props.showHelp
                    ? <div> <div className="absolute z-10 bg-slate-900/50 top-0 left-0 w-full h-full " onClick={this.props.toggleHelpMethod}>
                    </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                    w-[28rem] h-[30rem] z-20 dark:bg-neutral-800 bg-neutral-50
                                    grid grid-cols-auto
                                    drop-shadow-2xl rounded-lg
                                    ">
                            <div className="absolute justify-self-end h-min pr-5 pt-4 text-neutral-500" onClick={this.props.toggleHelpMethod}>
                                <CloseIcon />
                            </div>
                            <div className="row dark:text-neutral-50 text-neutral-800 text-center mt-8">
                                <span className=" text-l uppercase font-bold ">
                                    HELP
                                </span>

                            </div>
                            <div className="row dark:text-white text-neutral-800 text-center mt-8 px-3 mr-2">
                                <span className=" text-l uppercase font-bold ">
                                    HELPS Distribution
                                </span>

                            </div>

                            <div className="row grid grid-cols-2 ">
                                <div className="col border-r border-solid dark:border-white border-neutral-800 text-neutral-800 dark:text-neutral-50">

                                </div>
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    : <span></span>}
            </div>
        )
    }

}

export default HelpMenu;