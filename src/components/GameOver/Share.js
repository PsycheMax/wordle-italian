import React, { Component } from 'react';

class ShareButton extends Component {

    static defaultProps = {
        keyValue: "a",
        status: "neutral"
    }

    render() {
        return (
            <div className="grid place-items-center">
                <div className="my-9  ">
                    <button className=" cursor-pointer 
                                        bg-teal-600 hover:bg-teal-500 shadow-xl px-8 py-4 
                                        inline-block text-teal-100 hover:text-white 
                                         rounded
                                        ">
                        Share!
                    </button>
                </div>
            </div>
        )
    }

}

export default ShareButton;