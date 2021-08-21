import React from 'react';
import Nav from '../Nav';


function Header(props) {
    const { currentTab, SetCurrentTab } = props;
    return (
        <header className="hero row">
            <div className='col-6'>
                <h1 className="mx-2">Jordan Turcott</h1>
            </div>
            <div className="col-6">
                <Nav currentTab={currentTab} SetCurrentTab={SetCurrentTab}></Nav>
            </div>      
        </header>
    )
}

export default Header;