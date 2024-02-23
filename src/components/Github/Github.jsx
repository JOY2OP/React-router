import React from 'react'
import { useState, useEffect } from 'react';

const Github = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch(`https://api.github.com/users/joy2op`)
    .then((res) => res.json())
    .then((data) =>{ 
      console.log(data); 
      setData(data)
    })
  },[])
  return (
    <div>
    <img src={data.avatar_url} /> <br />
      
      Bio: {data.bio ? data.bio: <span>No bio</span>}
    </div>
  )
}

export default Github;