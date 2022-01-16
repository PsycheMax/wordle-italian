import React, { Component } from 'react';
import singleLineSVG from '../../svg/maxSingleLine.svg'
import './Hero.css';

let value = "";
class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: value
        }
        this.method = this.method.bind(this);
    }

    static defaultProps = {
        key: value
    }

    method() {
        console.log(this);
    }

    render() {
        return (
            <div className='grid grid-cols-1 mx-11 '>
                <div className='row grid grid-cols-1 md:grid-cols-2'>
                    <div className=' row md:order-2'>
                        <img src={singleLineSVG} alt='Max Pace face - lineart' className='max-h-[30rem] mx-auto' />
                    </div>
                    <div className='row mt-[9rem] md:py-auto py-5 md:order-1'>
                        <h2 className='text-4xl pb-3'>Max Pace - Web Developer!</h2>
                        <p className=''>
                            Hi - I'm Max Pace, a Web Developer from Southern Italy, with a strong interest for all things Software Development. <br />
                            My job is to turn complex processes (and/or problems) into simple, intuitive and often beautiful solutions. <br />
                            I am fluent in many different languages: Italian, Napoletano, English, Español, JavaScript, C#, HTML + CSS.<br />
                            I am also learning a bunch of other languages: RUST, Japanese, Python.
                            I have been a Web Marketing Specialist, a SEO Specialist, a Radio Host, a blog writer, a Salesperson, and a local journalist in my past.

                            Are you here because you received my application? Then maybe you want to take a look at my Timeline Resume.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Hero;

