import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Users");
  };

  return (
   <div className="home-container">
  <h1>🚀 GitHub Users Explorer</h1>
  <p>Welcome to GitHub Users Explorer</p>
  <button onClick={handleClick} className="home-btn">
    Fetch GitHub Users
  </button>
</div>

  );
};

export default Home;
