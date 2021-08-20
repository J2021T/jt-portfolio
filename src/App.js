import React from 'react';
import './App.css';
import Header from "./components/Header";
import Portfolio from './components/Portfolio';

function App() {
  const [currentTab, SetCurrentTab] = useState('About');
  const renderPage = () => {
    switch (currentTab) {
      case 'About' : return <About />;
      case 'Portfolio' : return <Portfolio />;
      case 'Contact' : return <Contact />;
      case 'Resume' : return <Resume />;
    }
  }
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
