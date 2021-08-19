import React from 'react';
import Nav from '../Nav';


function Header() {
    return (
        <header className="hero d-flex">
            <div>
                <h1>Jordan Turcott</h1>
            </div>
            <div>
                <Nav></Nav>
            </div>
        </header>
    )
}

export default Header;