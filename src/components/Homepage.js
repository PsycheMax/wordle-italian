import React, {Component} from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Header from './header/Header';
import Resume from './Resume';

let value = "";
class Homepage extends Component {

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
            <div className='grid place-items-center'>
                <Header />
                <div className="wrapper">
                    <Resume />
                    <ContactForm />
                    <Footer />
                </div>

            </div>
        )
    }

}

export default Homepage;