
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "./Netflixlogo.png"
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import userlogo from "./Userlogo.png"
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
    
  return (
    <div>
        <nav className='navSpace'>
            <div className="navNar">
            <div className='navStartBar'>
            
                <img src={logo} alt="" />
                <div className="menu">

                    <Link className='menubar' to = {"/"} >  <p>Home</p> </Link>

                    <Link className='menubar' to = {"/TvShows"}>   <p>TV Shows</p> </Link>

                    <Link className='menubar' to = {"/Movies"}>   <p>Movies</p> </Link>

                    <Link  className='menubar' to = {"/NewsNdPopular"}>  <p>News & Populer</p> </Link>

                    <Link className='menubar' to = {"/MyList"}>   <p>My List</p> </Link>

                    <Link className='menubar' to = {"/BrowseLan"}>  <p>Browser by Languages</p> </Link>


                </div>
            </div>

                <div className='navEndbar'>
                    <div className='searchBar'>
                        <FiSearch  className='searchIcon' />
                        <p>Children</p>
                        <BsBell className='bellIcon' />
{/* searchBar text area >>>>>>>>> */}
                    <div className='searchFiled'>
                        <input placeholder='Title, pepole, geners     ' type="text" />
                    </div>
                        
                    </div>
                    <div className='userAvatar'>
                        <img src={userlogo} alt="" />
                        <FaCaretDown />
                    </div>
                </div>
            </div>

        </nav>
    </div>
  )
}

export default Navbar