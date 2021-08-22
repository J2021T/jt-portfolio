import React from 'react';


function Nav(props) {
    const { currentTab, SetCurrentTab } = props;
    const tabs = ['About', 'Portfolio', 'Contact', 'Résumé'];

    return (
        <ul className="row">
          {tabs.map(tab => (
            <li className="col-3" key={tab}>
              <span
                onClick={() => SetCurrentTab(tab,console.log(currentTab))}
                className={
                  currentTab === tab ? 'navActive m-2' : 'm-2'
                } id="navSpan"
              >
                {tab}
              </span>
            </li>
          ))}
        </ul>
    );
};

export default Nav;