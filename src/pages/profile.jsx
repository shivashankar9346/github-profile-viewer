import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/Users");
    };

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src={user.avatar_url} alt={user.login} width="150" style={{ borderRadius: "50%" }} />
      <h2>{user.login}</h2>
      <p>{user.bio || "No bio available"}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a> <br />
      <button onClick={handleClick}> 🔙Back</button>
    </div>
  );
};

export default Profile;
