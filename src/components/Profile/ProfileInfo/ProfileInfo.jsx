import React, { useState }  from 'react';
import style from './../Profile.module.css';
import ProfileStatus from './ProfileStatus';
import UserAvatar from './../../../assets/images/UserAvatar.png';
import ProfileData from './ProfileData/ProfileData';
import EditProfileData from './ProfileData/EditProfileData';

// class ProfileInfo extends React.PureComponent {
  const ProfileInfo = (props) => {
    let [edit, setEdit] = useState(true)
    const onChangePhoto = (event) => {
      if (event.target.files.length > 0) {
        props.saveProfilePhoto(event.target.files[0])
      }
    }

    const onSaveProfileData = (value) => {
      props.saveProfileData(value).then(() => {
        setEdit(true)
      })
    }
    const editProfileData = () => {
      setEdit(false)
    }
    return (
      <div className={style.avatar}>
        <div>
          <img
            alt="Profile"
            src={props.profile.photos.small || UserAvatar}
          />
          {
            !props.isOwner && <div><input type="file" onChange={onChangePhoto} /></div>
          }
          {
            edit
            ? <ProfileData { ...props } editProfileData={editProfileData}/>
            : <EditProfileData initialValues={props.profile} { ...props } onSubmit={onSaveProfileData} />
          }
        </div>
        <strong>Status</strong>: <ProfileStatus {...props} />
      </div>
    )
}

export default ProfileInfo;
