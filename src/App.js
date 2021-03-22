import {useState, useEffect, React} from 'react';
import Header from './components/Header'
import Title from './components/Title'
import Switch from './components/Switch'
import './App.scss';

function App() {

  return (
    <div className="App">
        <Header />
        <Title />
    </div>
  );
}

export default App;
