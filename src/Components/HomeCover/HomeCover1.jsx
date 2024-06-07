import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import "./HomeCover1.css"
import img1 from '../../Assets/Assets/hc4.webp'
import img2 from "../../Assets/Assets/hc5.webp"


const HomeCover1 = () => {
  return (
    <div>
      
<div className="Whole">

    <div className="A1">

        <img className='z1' src={img1} alt="" />

          <div className="A6">
              <div className="A2">

               <img className='z2' src={img2} alt="" />
               <h1>Watch in Tamil, Telugu, Kannada</h1>
               <p>A major bank heist takes an unnerving turn with a mysterious</p>
               <p>interloper known only as dark devil begins to hijack the operation.</p> 

               <div className="A3">
                  <div className="z3">
                     <FaPlay className='play'/>
                    <p>Play</p>
                    </div>
                  <div className="z4">
                  <IoIosInformationCircleOutline className='info'/>

                    <p>More Info</p>
                    </div>
                </div>
  
              </div>                   
          </div>
      </div>        
    </div>
  </div>
  )
}

export default HomeCover1