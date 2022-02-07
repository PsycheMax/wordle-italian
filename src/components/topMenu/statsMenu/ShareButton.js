import React, { Component } from 'react';

class ShareButton extends Component {

    static defaultProps = {
        status: "neutral",
        copyStatusToClipboardMethod: ""
    }

    render() {
        return (
            <div className="grid place-items-center">
                <div className="my-9  ">
                    {this.props.deactivated ? <button
                        onClick={this.props.copyStatusToClipboardMethod}
                        className=" cursor-pointer 
                        bg-greyWrong-500 hover:bg-greyWrong-400 shadow-xl px-4 py-2 
                        inline-block text-neutral-100 hover:text-white 
                        rounded uppercase font-bold
                        ">
                        Finisci la partita<br /> per condividere!
                    </button> :
                        <button
                            onClick={this.props.copyStatusToClipboardMethod}
                            className=" cursor-pointer 
                        bg-greenSuccess-500 hover:bg-greenSuccess-400 shadow-xl px-8 py-4 
                        inline-block text-neutral-100 hover:text-white 
                        rounded uppercase font-bold
                        ">
                            Condividi!
                        </button>
                    }

                </div>
            </div>
        )
    }

}

export default ShareButton;