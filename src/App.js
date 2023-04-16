import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/training' element={<Training />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/contact' element={''}></Route>
      </Routes>
    </>
  );
}

export default App;
