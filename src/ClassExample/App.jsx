import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Politics from './Politics'
import Education from './Education'
import Technology from './Technology'
import Sports from './Sports'
import Crime from './Crime'
import Jokes from './Jokes'
import Entertainment from './Entertainment'
import India from './India'
import Pakistan from './Pakistan'
import China from './China'
import Afghanistan from './Afghanistan'
import Japan from './Japan'
import Australia from './Australia'
import Germany from './Germany'
import Russia from './Russia'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/politics' element={<Politics/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/technology' element={<Technology/>}></Route>
          <Route path='/sports' element={<Sports/>}></Route>
          <Route path='/crime' element={<Crime/>}></Route>
          <Route path='/jokes' element={<Jokes/>}></Route>
          <Route path='/entertainment' element={<Entertainment/>}></Route>
          <Route path='/india' element={<India/>}></Route>
          <Route path='/pakistan' element={<Pakistan/>}></Route>
          <Route path='/china' element={<China/>}></Route>
          <Route path='/afghanistan' element={<Afghanistan/>}></Route>
          <Route path='/japan' element={<Japan/>}></Route>
          <Route path='/australia' element={<Australia/>}></Route>
          <Route path='/germany' element={<Germany/>}></Route>
          <Route path='/russia' element={<Russia/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
