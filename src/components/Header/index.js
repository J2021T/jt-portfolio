import React from 'react';
import Nav from '../Nav';


function Header(props) {
    const { currentTab, SetCurrentTab } = props;
    return (
        <header className="hero d-flex">
            <div>
                <h1>Jordan Turcott</h1>
            </div>
            <div>
                <Nav currentTab={currentTab} SetCurrentTab={SetCurrentTab}></Nav>
            </div>
        </header>
    )
}

export default Header;