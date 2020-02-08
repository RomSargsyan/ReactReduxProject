import React from 'react';
import Pegination from './../Common/Pegination/Pegination';
import User from './User';

const Users = (props) => {
  if (!props.totalUsersCount) {
    return <h1>yo yo</h1>
  }

  return (
    <div>
      <Pegination {...props} />
      {
        props.users.map(user => {
          return <User key={user.id} user={user} {...props} />
        })
      }
    </div>
  )
}

export default Users;
