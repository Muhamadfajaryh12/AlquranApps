import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SurahList } from './components/SurahList';
import { Banner } from './components/Banner';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Surah } from './pages/Surah';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/surah/:id' element={<Surah/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
