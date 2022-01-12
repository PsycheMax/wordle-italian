import React, {Component} from 'react';

let value = "";
class NavMenu extends Component {

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
            <div className='bg-sky-600'>
                {/* Content goes here */}
                    NavMenu          
            </div>
        )
    }

}

export default NavMenu;