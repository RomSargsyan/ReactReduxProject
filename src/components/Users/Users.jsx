import React from "react";
import Pegination from "./../Common/Pegination/Pegination";
import User from "./User";

const Users = ({totalUsersCount, users, onFollow, onUnfollow, isFollowing, ...props}) => {
  if (!totalUsersCount) {
    return <h1>yo yo</h1>;
  }

  return (
    <div>
      <Pegination totalUsersCount={totalUsersCount} {...props} />
      {users.map(user => {
        return <User
          user={user}
          key={user.id}
          onFollow={onFollow}
          onUnfollow={onUnfollow}
          isFollowing={isFollowing}
        />;
      })}
    </div>
  );
};

export default Users;
