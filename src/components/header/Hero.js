import React, {Component} from 'react';

let value = "";
class Hero extends Component {

    constructor(props){
        super(props);
        this.state={
            key:value
        }
        this.method = this.method.bind(this);
    }

    static defaultProps = {
        key:value
    }

    method(){
        console.log(this);
    }

    render(){
        return(
            <div>
                {/* Content goes here */}
                      Hero          
            </div>
        )
    }

}

export default Hero;