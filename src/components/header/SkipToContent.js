import React, {Component} from 'react';

let value = "";
class SkipToContent extends Component {

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
            <a className='hidden focus-visible:w-12 focus-visible:absolute focus-visible:block focus-visible:mx-auto focus-visible:isolate focus-visible:top-0 sr-only'>
                {/* Content goes here */}
                Skip To Page Content
            </a>
        )
    }

}

export default SkipToContent;