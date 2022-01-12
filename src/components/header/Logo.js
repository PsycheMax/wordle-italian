import React, {Component} from 'react';

let value = "";
class Logo extends Component {

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
            <div className=''>
                    <div className='rubik-font text-9xl text-white border-0 m-8 place-content-center object-center uppercase font-bold tracking-tighter'>
                        m!
                    </div>
            </div>
        )
    }

}

export default Logo;