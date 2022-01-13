import React, {Component} from 'react'; 
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  themes,
  createTheme
} from '@merc/react-timeline';

const value = "";
const maxTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#efefef',
    },
    date: {
      backgroundColor: '#347DC4',
    },
    marker: {
      borderColor: '#63B2FF',
    },
    timelineTrack: {
      backgroundColor: '#347DC4',
    },
  });

class TimelineResume extends Component {

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
                      Timeline         
                    <Timeline theme={maxTheme}>
                        <Events>
                            <TextEvent date="September 2011" text="**Bachelor's Degree** in *Media Studies and Communications*" />
                            <TextEvent date="July 2013" text="**Master's Degree** in *Corporate Communications and Web Marketing* - SUMMA CUM LAUDE" />
                            <TextEvent date="December 2013" text="Started my job as Junior Account Executive for Gruppo RMB" />
                            <TextEvent date="October 2014" text="Started my job as Account Executive and Social Media Manager for LCPromotion" />
                            
                            <ImageEvent
                                date="July 2016"
                                text="Moved to London, UK"
                                src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
                                alt="Picture of the House of Parliament, and the 'Big Ben' clock tower, in London (UK)"
                                credit="Photo by [Pixabay](https://www.pexels.com/photo/big-ben-bridge-castle-city-460672/)"
                            >
                                <div>
                                    Moving from a small town in Italy to a metropolis like London was quite the cultural shock!
                                </div>
                            </ImageEvent>

                            <TextEvent date="September 2016" text="Started my job as Social Media Manager for GiftyLab, a London-based Startup" />

                            <ImageEvent
                                date="November 2016"
                                text="Started learning C# in my free time - CHANGE ME"
                                // TODO: CHANGE THIS
                                src="https://banner2.cleanpng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg"
                                alt="C# Programming language logo"
                                credit="C# and .Net - Microsoft"
                            >
                                <div>
                                    Learning a programming language for the first time, via a Udemy course and a book, was quite the challenge!
                                </div>
                            </ImageEvent>

                            <TextEvent date="January 2017" text="Started my job as Shop Sales Assistant for Pret-A-Manger, a London-based coffee and food chain"/>

                            <ImageEvent
                                date="May 2017"
                                text="Started learning HTML, CSS and JS - for Web Development"
                                src="https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png"
                                alt="JavaScript logo"
                                credit="Photo by [Pixabay](https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png)"
                            >
                                <div>
                                        Having grasped some basic programming concepts with C#, I decided to move onto something else. Web Development catched my eye
                                </div>
                            </ImageEvent>

                            <TextEvent date="December 2017" text="Started my job as Digital Marketing Specialist for Ark Data Centres, a UK-Based Data Centers provider"/>

                            <ImageEvent
                                date="December 2017 - August 2020"
                                text="Started my job as **Digital Marketing Specialist** for **Ark Data Centres**, a UK-Based Data Centers provider"
                                src="https://arkdatacentres.co.uk/wp-content/themes/ark/assets/img/ark-logo.svg"
                                alt="Ark Data Centres logo"
                                credit="All rights reserved [Ark Data Centres](https://arkdatacentres.co.uk)"
                            >
                                <div>
                                    <UrlButton href="https://arkdatacentres.co.uk">
                                        At Ark I had to plan, design, and implement all the Digital Marketing (B2B) online and offline activities. 
                                        Managing the launch of a new website for the company, I had a chance to make use of my newly-found programming skills.
                                    </UrlButton>
                                </div>
                            </ImageEvent>

                            <TextEvent date="September 2020" text="Thanks the raging pandemic, I had to go back to Italy - where I started doing some freelance work in the Digital Marketing Field, while learning more about programming."/>


                        </Events>
                    </Timeline> 
            </div>
        )
    }

}

export default TimelineResume;