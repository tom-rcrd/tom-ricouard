import React from 'react'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Infos from './Pages/Infos'
import Projets from './Pages/Projets'

export default function App () {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element ={<Home />} />
        <Route path='/infos' element ={<Infos />} />
        <Route path='/projets' element ={<Projets />} />
      </Routes>
    </BrowserRouter>
   </div> 

  )
}
