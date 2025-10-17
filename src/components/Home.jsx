import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Users");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub Users Explorer</h1>
      <p>Welcome to github users explorer</p>
      <button onClick={handleClick}>Fetch GitHub Users</button>
    </div>
  );
};

export default Home;
