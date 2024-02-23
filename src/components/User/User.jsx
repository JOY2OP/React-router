import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    //Use params hook - extracting userId from hook - same variable name used on <Route />
    const {userId} = useParams();   
  return (
    <div>User: {userId ? userId : "No user"}</div>
  )
}

export default User