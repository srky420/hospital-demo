import { useState } from 'react'
import './App.css'
import { Hero } from './components/Hero'
import { Carousel } from './components/Carousel'
import { Navbar } from './components/Navbar'
import { Achievements } from './components/Achievements'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Hero />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
