import React, { Component } from 'react';

class Alert extends Component {

    constructor(props) {
        super(props);
        this.returnClasses = this.returnClasses.bind(this);

    }

    static defaultProps = {
        alert: {
            visible: true,
            classList: "border-gray-300 bg-greenSuccess-500 text-slate-50 ",
            alertMessage: "Awesome!",
            duration: 2000
        }
    }

    returnClasses(basicClasses) {
        return `${basicClasses} ${this.props.alert.classList}`;
    }

    render() {
        let commonClasses = " rounded-lg border p-3 shadow-lg ";
        let visibilityClass = " hidden ";
        if (this.props.alert.visible) { visibilityClass = " " } else { visibilityClass = " hidden " };
        return (
            <div className={`flex w-screen h-screen absolute ${visibilityClass}`} >
                <div className="m-auto mt-96">
                    <div className={this.returnClasses(commonClasses)}>
                        <div className="flex flex-row">
                            <div className="mx-4 my-2">
                                <span className="font-semibold">{this.props.alert.alertMessage}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Alert;