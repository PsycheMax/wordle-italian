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
            <div className={`grid grid-cols-10 max-w-[500px] w-full min-h-auto border-greyWrong-100 items-center border-b-2 `} >

                <div className="col-span-1" onClick={this.props.toggleHelpMethod}>Spiegone</div>
                <div className="col-span-2" > </div>
                <div className="col-span-4 text-4xl justify-self-center" >Wordle </div>
                <div className="col-span-1" > </div>
                <div className="col-span-1" onClick={this.props.toggleStatsMethod} >Stats</div>
                <div className="col-span-1" onClick={this.props.toggleOptionsMethod} >Options</div>

            </div>
        )
    }

}

export default TopMenu;