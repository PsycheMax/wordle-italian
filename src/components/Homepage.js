import React, {Component} from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Hero from './Hero';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Resume from './Resume';
import SkipToContent from './SkipToContent';

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
            <div>
                <div className="wrapper container">
                    <SkipToContent />
                    <Logo />
                    <NavMenu />
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