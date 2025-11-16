import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './profile.css'

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
   <div className="user-container">
     <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="user-avatar" />
      <h2 className="user-name">{user.login}</h2>
      <p className="user-bio">{user.bio || "No bio available"}</p>
      <p className="user-follow">Followers: <b>{user.followers}</b></p>
      <p className="user-follow">Following: <b>{user.following}</b></p>

      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
        View on GitHub
      </a>
      <br />
      <button className="back-btn" onClick={handleClick}> 🔙 Back </button>
    </div>
   </div>

  );
};

export default Profile;
