import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/backgroundimage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${image})` }}>
      <div className="headerContainer">
        <h1> Indian Cuisine </h1>
          <Link to="/menu">
          <button> PLACE ORDER </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;