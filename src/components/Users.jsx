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
            {data.map(user => (
                <div key={user.id} className='card'>
                    <img src={user.avatar_url} alt={user.login}/>
                    <h3>{user.login}</h3>
                    <button onClick={() => HandleClick(user.login)}>Profile</button>
                </div>
            ))}
        </div>
   
  )
}

export default Users