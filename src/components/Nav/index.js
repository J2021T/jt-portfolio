import React from 'react';


function Nav(props) {
    const { currentTab, SetCurrentTab } = props;
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="nav-item" key={tab}>
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
//     return (
//         <nav>
//             <ul className="flex-row">
//                 <li className='navActive mx-2'><span onClick={() => setCurrentTab('About')}>About</span></li>
//                 <li className='mx-2'><span onClick={() => setCurrentTab('Portfolio')}>Portfolio</span></li>
//                 <li className='mx-2'><span onClick={() => setCurrentTab('Contact')}>Contact</span></li>
//                 <li className='mx-2'><span onClick={() => setCurrentTab('Resume')}>Resumé</span></li>
//             </ul>
//         </nav>
//     )
};

export default Nav;