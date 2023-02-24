import Cuisine2 from "../assets/Cuisine2.webp";
import { Link } from "react-router-dom";
import "../styles/navbar.css";


function Navbar() {
  
  return (
    <div className="navbar">
      <div className="leftSide" >
        <img src={Cuisine2} />
        </div>
         <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
       
  );
}

export default Navbar;