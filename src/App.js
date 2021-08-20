import React from 'react';
import './App.css';
import Header from "./components/Header";

function App() {
  const [currentTab, SetCurrentTab] = useState('About');
  const renderPage = () => {
    switch (currentTab) {
      case 'About' : return <About />;

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
