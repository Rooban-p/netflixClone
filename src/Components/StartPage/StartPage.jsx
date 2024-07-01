import React from "react";
import "./StartPage.css";

import Logo from "../../Assets/Netflix_image-removebg-preview.png";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
const StartPage = () => {
  return (
    <div>
      <div className="bgimg">
        <div className="Header">
          <img className="netflix" src={Logo} alt="" />

          <div className="row1">
            <div className="option">
              {/* <p className='tag'>English</p> */}
              <select className="language">
                <option value="en">English</option>
                <option value="es">Espanol</option>
                <option value="fr">Francais</option>
              </select>
            </div>
            <div className="linkbtn1">
              <Link to="/Account">
                <button className="btn">Sign In</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="items">
            <h1 className="headLine">Unlimited movies, TV shows and more</h1>
            <h3 className="line1">Watch anywhere. Cancel anytime.</h3>
            <h3 className="line2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="signIN">
              <input
                className="emailInp"
                type="email"
                placeholder="Email address"
                name=""
                id=""
              />
            </div>
          </div>

         <div className="linkbtn2">
         <Link to="/home" className="line">
            <button className="getBtn">
              {" "}
              Get Started <GoChevronRight />{" "}
            </button>
          </Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
