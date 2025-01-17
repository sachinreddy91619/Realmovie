import React from 'react'

import Home from './Home';

import Movies from './Movies';
import SingleMovie from './SingleMovie';
import Errorpage from './Errorpage';

import  './App.css';


import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (

    <>
    
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route  path="movie/:id" element={<SingleMovie/>}/>

      <Route path="*" element={<Errorpage/>}/>
    </Routes>
    
    </BrowserRouter>

    
    </>



  )
}  

export default App