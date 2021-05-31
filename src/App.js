import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import DescriptionCard from './components/DescriptionCard';
import Home from './components/Home';

export const App = () => {
  return (
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/DescriptionCard/:title' component={DescriptionCard}/>
    </div>
  )
}

export default App;