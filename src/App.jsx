import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experiecne'
import Testimonials from './components/testimonials/Testimonials'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
    </>
  )
}

export default App