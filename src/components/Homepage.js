import React, {Component} from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Header from './header/Header';
import Hero from './hero/Hero';
import Resume from './resume/Resume';

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
            <div className='grid place-items-center '>
                <Header />
                <div className="wrapper mt-32 justify-content mx-9 l:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
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