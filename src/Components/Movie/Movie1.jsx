import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import  { useState } from 'react';


const movie1 = (props) => {
      const [selectedItem, setSelectedItem] = useState(null);

      const handleImageClick = (item) => {
        setSelectedItem(props.item);
      };
    
      const handleCloseClick = () => {
        setSelectedItem(null);
      };
    
      return (
        <div>
          <div className={props.main}>
            <div className={props.main_img}>
              <img
                className={props.movie_img}
                src={props.img}
                alt=""
                onClick={() => handleImageClick(props.item)}
              />
            </div>
    
            {selectedItem === (props.item) && (
              <div className={props.click_main}>
                <IoMdClose className={props.clse}  onClick={() => handleCloseClick(props.handleCloseClick)} />
                
                <div className={props.video_div}>
                  {/* <iframe className='video1' src="https://www.youtube.com/embed/WvzZYynDkwA?si=-AMfU9__yZjpqQBK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>  */}
                  <video className={props.videoo} preload="none" autoPlay loop >
                    <source src={props.video} type="video/mp4" />
                  </video>
                  <img src={props.image2} alt="" /> 
                  <button className={props.play}>
                    <FaCirclePlay />Play
                  </button>
                </div>
    
                <div className={props.cont_main}>
                  
    
                  <div className={props.video_cont}>
                    <div className={props.main_match}>
                      <h4 className={props.matchh}>{props.match}</h4>
                      <h4>{props.year}</h4>
                      <h4>{props.season}</h4>
                      <h5 className={props.hdd}>{props.hd}</h5>
                    </div>
                    <div className={props.main_ua}>
                      <h4 className={props.uaa}>{props.ua}</h4>
                      <h5>{props.type}</h5>
                    </div>
                    <div className={props.episode1}>
                      <h3>{props.today}</h3>
                      <h3>{props.movie}</h3>
                      <h5>{props.content}</h5>
                    </div>
                  </div>
    
                  <div className={props.castt}>
                    <h5>{props.cast}</h5>
                    <h5>{props.genres}</h5>
                    <h5>{props.cat}</h5>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      );
}

export default movie1