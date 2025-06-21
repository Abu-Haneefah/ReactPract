// import React from 'react'

import { useParams } from "react-router-dom";

function UsersDetails() {
  const { userId } = useParams();
  //   const userId = params.userId;
  return (
    <div>
      <h1 className="flex justify-center">Details about users {userId}</h1>
    </div>
  );
}

export default UsersDetails;
