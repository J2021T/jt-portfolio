import React from 'react';


function Resume() {

    return (
        <div className="row">
            <h2 className="col-12">Résumé</h2>
            <div className="mb-5">
                <a href={require("../../assets/resume/Resume.pdf").default} download><h3>Download My Résumé</h3></a>
            </div>
            <div id="skills" className="col-12 col-md-6">
                <h3>Front-End Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>React</li>
                </ul>
            </div>
            <div id="skills" className="col-12 col-md-6">
            <h3>Back-End Skills</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>API's</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                    <li>Progressive Web Applications (PWA)</li>
                </ul>
            </div>
        </div>
     )    
}

export default Resume;