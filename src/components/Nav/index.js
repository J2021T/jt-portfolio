import React from 'react';


function Nav(props) {
    const { currentTab, setCurrentTab } = props;
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="nav-item" key={tab}>
              <a
                href={tab}
                onClick={() => setCurrentTab(tab)}
                className={
                  currentTab === tab ? 'nav-link active' : 'nav-link'
                }
              >
                {tab}
              </a>
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