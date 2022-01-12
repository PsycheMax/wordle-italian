import React, {Component} from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Hero from './Hero';
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
            <div className='text-large'>
                <Header />
                <div className="wrapper bg-blue-600">
                    <Hero />
                    <Resume />
                    <ContactForm />
                    <Footer />
                </div>

            </div>
        )
    }

}

export default Homepage;