import React from 'react';
import { NavLink } from 'react-router-dom';
import userAvatar from './../../assets/images/UserAvatar.png';
import style from './User.module.css';

const User = ({ user, ...props }) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              alt="User avatar"
              src={user.photos.small || user.photos.large || userAvatar}
              className={style.avatar}
            />
          </NavLink>
        </div>
        <div>
          {
            user.followed
            ? <button
                disabled={props.isFollowing.some(id => id === user.id )}
                onClick={()=> {props.onFollow(user.id)}}
              >Follow</button>
            : <button
                disabled={props.isFollowing.some(id => id === user.id )}
                onClick={()=> {props.onUnfollow(user.id)}}
              >Unfollow</button>
          }
        </div>
      </div>
      <div>
        <div>
          {user.name}
        </div>
        <div>
          {user.status}
        </div>
        <div>
          'user.location.city'
        </div>
        <div>
          'user.location.country'
        </div>
      </div>
    </div>
  )
}

export default User;
