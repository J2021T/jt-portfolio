import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentTab, SetCurrentTab] = useState('About');
  const renderPage = () => {
    switch (currentTab) {
      case 'About' : return <About />;
      case 'Portfolio' : return <Portfolio />;
      case 'Contact' : return <Contact />;
      case 'Resume' : return <Resume />;
      default : return <About />;
    }
  };

  return (
    <div className="App">
      <div>
        <Header currentTab={currentTab} SetCurrentTab={SetCurrentTab} />
      </div>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
