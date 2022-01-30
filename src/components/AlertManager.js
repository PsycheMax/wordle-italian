import React, { Component } from 'react';

class AlertManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
        this.returnClasses = this.returnClasses.bind(this);
        this.hideEverythingAfterStateDuration = this.hideEverythingAfterStateDuration.bind(this);
        this.toggleVisibleState = this.toggleVisibleState.bind(this);
    }

    static defaultProps = {
        classList: "border-gray-300 bg-greenSuccess-500 text-slate-50 ",
        alertMessage: "Awesome!",
        duration: "2000"
    }

    returnClasses(basicClasses) {
        return `${basicClasses} ${this.props.classList}`;
    }

    hideEverythingAfterStateDuration() {
        console.log("Hide called!")
        if (this.state.visible) {
            setTimeout(this.toggleVisibleState, this.props.duration)
        }
    }

    componentDidUpdate() {
        this.hideEverythingAfterStateDuration();
    }
    componentDidMount() {
        this.hideEverythingAfterStateDuration();
    }

    toggleVisibleState() {
        this.setState((prevState) => { return { visible: !prevState.visible } })
    }

    render() {
        // let commonClasses = "font-bold text-black absolute top-[5%] left-[42%] bg-greenSuccess-500 ";
        let commonClasses = " rounded-lg border p-3 shadow-lg ";
        let visibilityClass = " hidden ";
        if (this.state.visible) { visibilityClass = " " } else { visibilityClass = " hidden " };
        return (
            <div className={`flex w-screen h-screen absolute ${visibilityClass} `} >
                <div className="m-auto mt-96">
                    <div className={this.returnClasses(commonClasses)}>
                        <div className="flex flex-row">
                            <div className="mx-4 my-2">
                                <span className="font-semibold">{this.props.alertMessage}</span>
                                {/* <span class="block text-gray-500">Anyone with a link can now view this file</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AlertManager;