import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./Netflixlogo.png";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import userlogo from "./Userlogo.png";
import { FaCaretDown } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { FaRegUser } from "react-icons/fa6";
import { BsQuestionCircle } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [state, setstate] = useState(false);
  const searchBarHandler = () => {
    setstate(!state);
  };

  return (
    <div>
      <nav className="navSpace">
        <div className="navNar">
          <div className="navStartBar">
            <div className="navlink">
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="menu">
              <Link className="menubar" to={"/home"}>
                {" "}
                <p>Home</p>{" "}
              </Link>

              <Link className="menubar" to={"/TvShows"}>
                {" "}
                <p>TV Shows</p>{" "}
              </Link>

              <Link className="menubar" to={"/Movies"}>
                {" "}
                <p>Movies</p>{" "}
              </Link>

              <Link className="menubar" to={"/NewsNdPopular"}>
                {" "}
                <p>News & Populer</p>{" "}
              </Link>

              <Link className="menubar" to={"/MyList"}>
                {" "}
                <p>My List</p>{" "}
              </Link>

              <Link className="menubar" to={"/BrowseLan"}>
                {" "}
                <p>Browser by Languages</p>{" "}
              </Link>
            </div>
          </div>

          <div className="navEndbar">
            <div className="searchBar">
              <FiSearch onClick={searchBarHandler} className="searchIcon" />
              <p>Children</p>
              <BsBell className="bellIcon" />
              {/* searchBar text area >>>>>>>>> */}
              {state === true ? (
                <div className="searchFiled">
                  <input placeholder="Title, pepole, geners     " type="text" />
                </div>
              ) : null}
            </div>
            <div className="userAvatar">
              <img src={userlogo} alt="" />
              <FaCaretDown />
              <div className="dropParent">
                <div className="row1">
                  <img src={userlogo} alt="" />
                  <p>Children</p>
                </div>
                <div className="row2">
                  <p>
                    {" "}
                    <TiPencil /> Manage Profiles
                  </p>
                  <p>
                    {" "}
                    <ImProfile /> Transfer profile
                  </p>
                  <Link className="linkTag" to={"/Account"}>
                    {" "}
                    <p>
                      {" "}
                      <FaRegUser /> Account
                    </p>
                  </Link>
                  <p>
                    {" "}
                    <BsQuestionCircle /> help Center
                  </p>
                </div>
                <div className="row3">
                  <p>Sign out of Netflix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
