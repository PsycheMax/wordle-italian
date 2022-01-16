import React, {Component} from 'react';
import singleLineSVG from '../../svg/maxSingleLine.svg'

let value = "";
class Hero extends Component {

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
            <div className='grid grid-cols-1 mx-9 '>
                {/* Content goes here */}
                <div className='row grid grid-cols-1 md:grid-cols-2'>
                    <p className='row mt-[9rem] md:py-auto py-5'>
                        Hi - I'm Max Pace, a Junior Developer from Southern Italy. My job is to turn complex processes (and/or problems) into simple, intuitive and often beautiful solutions.
                        I am fluent in many different languages: Italian, Napoletano, English, Spanish, JavaScript, C#, HTML + CSS. I am also learning a bunch of other languages: RUST, Japanese, Python. 
                        I have been a Web Marketing Specialist, a SEO Specialist, a Radio Host, a blog writer, a Salesperson, and a local journalist in my past. 
                        
                        Are you here because you received my resume? Then you probably want to take a look at my timeline resume. 
                    </p>
                    <img src={singleLineSVG} className='max-h-[30rem] mx-auto row' />
                </div>
            </div>
        )
    }

}

export default Hero;