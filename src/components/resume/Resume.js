import React, {Component} from 'react';
import TimelineResume from './Timeline';

let value = "";
class Resume extends Component {

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
                      Resume       
                      <TimelineResume />
            </div>
        )
    }

}

export default Resume;