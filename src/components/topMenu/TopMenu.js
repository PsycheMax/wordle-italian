import React, { Component } from 'react';

class TopMenu extends Component {

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
            <div className={'grid grid-cols-10 max-w-full sm:max-w-max w-full min-h-auto border-greyWrong-100 items-center border-b-2 dark:text-neutral-50 text-neutral-800 '} >

                <div className="col-span-1" onClick={this.props.toggleHelpMethod}>Aiuto</div>
                <div className="col-span-2" > </div>
                <div className="col-span-4 text-center" >
                    <div className='row text-4xl  justify-self-center'>Wordle </div>
                    <div className='row text-sm justify-self-center'>(In Italiano, unofficial) </div>
                </div>
                <div className="col-span-1" > </div>
                <div className="col-span-1" onClick={this.props.toggleStatsMethod} >Stats</div>
                <div className="col-span-1" onClick={this.props.toggleOptionsMethod} >About</div>

            </div>
        )
    }

}

export default TopMenu;