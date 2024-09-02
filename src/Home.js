import React, { useContext } from 'react';

import { AppContext } from './Context';
import Search from './Search';
import Movies from './Movies';

const Home = () => {


    //const name=useContext(AppContext);
  return (


    <div>

      <Search/>
      <Movies/>


    </div>
    
  )
}

export default Home