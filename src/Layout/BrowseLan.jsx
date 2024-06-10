import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
// import Footer from '../Components/Footer/Footer'
import HomeCover from "../Components/HomeCover/HomeCover1";
import Slider1 from "../Components/Slider1/Slider1";
import Slider2 from "../Components/Slider2/Slider2";
import Footer from '../Components/Footer/Footer'
import Slide from '../Components/Slide/HomeSlider'
import Slide2 from "../Components/Slide/HomeSlide2"
import Slide3 from "../Components/Slide/HomeSlide3"

const BrowseLan = () => {
  return (
    <div>
      <Navbar />
      <HomeCover />
      <Slider1 />
      <Slide />
      <Slide2 />
      <Slide3 />
      <Slider2 />
      <Slide />
      <Slide2 />
      <Slide3 />
      <Footer />
    </div>
  )
}

export default BrowseLan