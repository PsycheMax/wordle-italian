import React, {Component} from 'react';

let value = "";
class Footer extends Component {

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
                      Footer
                {/* List of tech stack used here */}
            </div>
        )
    }

}

export default Footer;