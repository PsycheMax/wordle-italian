import React, { Component } from 'react';
import { ReactComponent as ShareIcon } from './share-icon.svg';

class ShareButton extends Component {

    static defaultProps = {
        status: "neutral",
        copyStatusToClipboardMethod: ""
    }

    render() {
        return (
            <div className="grid place-items-center">
                <div className="my-9  ">
                    {this.props.deactivated ? <div>NONE</div> :
                        <button
                            onClick={this.props.copyStatusToClipboardMethod}
                            className=" cursor-pointer 
                        bg-greenSuccess-500 hover:bg-greenSuccess-400 shadow-xl px-8 py-4 
                        inline-block text-neutral-100 hover:text-white 
                        rounded uppercase font-bold
                        ">
                            Share
                        </button>
                    }

                </div>
            </div>
        )
    }

}

export default ShareButton;