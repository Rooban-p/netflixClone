import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
// import Footer from '../Components/Footer/Footer'
import Footer from '../Components/Footer/Footer'
import Slide from '../Components/Slide/HomeSlider'
import Slide2 from "../Components/Slide/HomeSlide2"
import Slide3 from "../Components/Slide/HomeSlide3"

const BrowseLan = () => {
  return (
    <div>
      <Navbar/>
      <Slide/>
      <Slide2/>
      <Slide3/>
      <Slide/>
      <Slide2/>
      <Slide3/>
      <Footer/>
      Browser by Languages
    </div>
  )
}

export default BrowseLan