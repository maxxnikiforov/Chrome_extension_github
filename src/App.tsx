import React from 'react';
import './App.scss';

function App() {
  const message = (): void => {alert('App is working')}
  return (
    <div className="app">
      <p>Test template</p>
      <button className="app__button" onClick={message}>Test</button>
    </div>
  );
}

export default App;
