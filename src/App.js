import React from 'react';
import ShopItemClass from './components/ShopItemClass';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass/>
      </div>
    </div>
  );
}

export default App;
