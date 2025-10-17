import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {

    const navigate = useNavigate();
  
    const HandleClick = (username) => {
      navigate(`/profile/${username}`);
    };

    const [data,setData]=useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users").then(
        res =>res.json()
      ).then(json => setData(json));
    
    }, [])
    

  return (
          <div className='container'>
            <h1> 🚀 GitHub User Explorer</h1>
            <h2>GitHub Users</h2>
            {data.map(user => (
                <div key={user.id} className='card'>
                    <div className='userprofile'>
                      <img src={user.avatar_url} alt={user.login} style={{ width: "50px" }}/>
                    <h3>{user.login}</h3>
                    </div>
                    <div>
                      <button onClick={() => HandleClick(user.login)} className='Profile-btn'> View Profile</button>
                    </div>
                </div>
            ))}
        </div>
   
  )
}

export default Users