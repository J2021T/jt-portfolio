import React from 'react';

function About() {

    return (
        <div className='row justify-content-center text-center hover-overlay'>
            <h2 className="mx-2">About Me</h2>
            <div>
                <img src={require("../../assets/me/camping.jpg").default} alt="Jordan" id="me" className="img-responsive m-2"></img>
            </div>
            <div>
                <p className="mx-2">I am a husband and father first.  My loyalty and passion are first given to my family.  Although, sports and outside activities are very close. I love the New England region of the United States.</p>
                <p className="mx-2">I have been in web development for five months now.  I have become a full stack web developer through my time in the Butler Web Development Bootcamp.  I can assist teams on both the front and back ends to accomplish their web goals. The reason I enjoy Programming is because I enjoy riddles and puzzles.  Programming to me is one endless puzzle that I continously get to enjoy.  I am excited for the future and to continue learning in this great field.  To see my skills at work please check out the Portfolio tab.</p>
            </div>
            
        </div>
        
    )
}

export default About;