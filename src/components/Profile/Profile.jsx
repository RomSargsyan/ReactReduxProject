import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostForm from './../Form/ProfilePostForm';
import style from './Profile.module.css';


const Profile = (props) => {
  let postElements =
    props.posts.map( (el) => {return <Posts key={el.id} message={el.message} />})

  const onAddPost = (value) => {
    props.addPost(value.newTextPost);
  }

  if (!props.profile) {
    return <h1>yo yo</h1>
  }

  return (
    <div className={style.profile}>
      <ProfileInfo {...props} />
      <div>
        <h3>New Post</h3>
        <PostForm onSubmit={onAddPost} {...props} />
        { postElements }
      </div>

    </div>
  )
}

export default Profile;
