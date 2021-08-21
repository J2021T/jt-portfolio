import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="row justify-content-center text-center">
                <a href='https://github.com/J2021T' target='_blank' rel="noreferrer" className="col-4"><FaGithub size={70} /></a>
                <a href='https://www.linkedin.com/in/jordan-turcott-jt2021?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVxHDZ3vqR1a6TZ2D9UsVkQ%3D%3D' target='_blank' rel="noreferrer" className="col-4"><FaLinkedin size={70} /></a>
                <a href='https://twitter.com/jTurk_15' target='_blank' rel="noreferrer" className="col-4"><FaTwitter size={70} /></a>
            </div>
        </footer>
    )
}

export default Footer;