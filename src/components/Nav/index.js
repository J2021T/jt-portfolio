import React from 'react';


function Nav() {
    return (
        <nav>
            <ul className="flex-row">
                <li className='navActive mx-2'>About</li>
                <li className='mx-2'>Portfolio</li>
                <li className='mx-2'>Contact</li>
                <li className='mx-2'>Resumé</li>
            </ul>
        </nav>
    )
};

export default Nav;