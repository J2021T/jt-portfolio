import React from 'react';
import { FaGithub } from 'react-icons/fa';


function Project() {
    const projects = [
        {
            name: 'Butler-Bites',
            github: 'https://github.com/antellitocci/butler-bites',
            deployed: 'https://butler-bites.herokuapp.com/'
        },
        {
            name: 'Mix-Master',
            github: 'https://github.com/J2021T/mix-master',
            deployed: 'https://j2021t.github.io/mix-master/'
        },
        {
            name: 'Take-Notes',
            github: 'https://github.com/J2021T/take-notes',
            deployed: 'https://powerful-mountain-28877.herokuapp.com/'
        },
        {
            name: 'Scheduler',
            github: 'https://github.com/J2021T/schedule-life',
            deployed: 'https://j2021t.github.io/schedule-life/'
        },
        {
            name: 'p4SsW0rD',
            github: 'https://github.com/J2021T/p4ssw0rd',
            deployed: 'https://j2021t.github.io/p4ssw0rd/'
        },
        {
            name: 'Finance-Tracker',
            github: 'https://github.com/J2021T/finance-tracker',
            deployed: 'https://turcott-finance-tracker.herokuapp.com/'
        }
    ]
    return (
        <div className="justify-content-around row"> 
            {projects.map((project) => (
                // <div className='bg-image hover-overlay col-12 col-md-5' style={{ maxWidth: '22rem' }}>
                //     <img src={require(`../../assets/screenshots/${project.name}.png`).default} alt={project.name} className='img-thumbnail m-2 col-12 col-md-5' key={project.name} />
                //     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.6)' }}></div>
                // </div>
                <div className="container img-thumbnail m-2 col-12 col-md-5">
                    <img src={require(`../../assets/screenshots/${project.name}.png`).default} alt={project.name} id="projects" className="img-thumbnail" key={project.name} />
                    <div className="d-flex flex-column middle">
                        <a href={project.github} target='_blank' rel="noreferrer" className="mb-2 col-12"><FaGithub size={70} /></a>
                        <a href={project.deployed} target='_blank' rel="noreferrer" className="col-12">{project.name} App</a>
                    </div>
                </div>
            ))}           
        </div>
        
    )
}

export default Project;