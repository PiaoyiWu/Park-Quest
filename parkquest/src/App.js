import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Home/HomePage';
import Generate from './Generate/Generate'
import Leaderboard from './Leaderboard/Leaderboard'


function App() {
  return (
    <React.Fragment>
    <header>
      <Navbar/>
      <div className='spacer'/>
    </header>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/GenerateMap' element={<Generate/>}/>
      <Route path='/Leaderboard' element={<Leaderboard/>}/>

    </Routes>
    </React.Fragment>
  );
}

export default App;