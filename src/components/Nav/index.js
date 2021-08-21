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
                  currentTab === tab ? 'navActive mx-2' : 'mx-2'
                }
              >
                {tab}
              </span>
            </li>
          ))}
        </ul>
    );
};

export default Nav;