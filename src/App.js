import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from "./components/Header";
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentTab, SetCurrentTab] = useState('About');
  const renderPage = () => {
    switch (currentTab) {
      case 'About' : return <About />;
      case 'Portfolio' : return <Portfolio />;
      case 'Contact' : return <Contact />;
      case 'Résumé' : return <Resume />;
      default : return <About />;
    }
  };

  return (
    <div className="App">
      <Header currentTab={currentTab} SetCurrentTab={SetCurrentTab} />
      <div>
        <main className='d-flex justify-content-around align-text-center'>{renderPage()}</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
