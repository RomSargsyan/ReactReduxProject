import React, { useState }  from 'react';
import style from './../Profile.module.css';
import ProfileStatus from './ProfileStatus';
import UserAvatar from './../../../assets/images/UserAvatar.png';
import ProfileData from './ProfileData/ProfileData';
import EditProfileData from './ProfileData/EditProfileData';

const ProfileInfo = ({saveProfilePhoto, saveProfileData, profile, isOwner, ...props}) => {
  const [edit, setEdit] = useState(true)
  const onChangePhoto = (event) => {
    if (event.target.files.length > 0) {
      saveProfilePhoto(event.target.files[0])
    }
  }

  const onSaveProfileData = (value) => {
    saveProfileData(value).then(() => {
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
          src={profile.photos.small || UserAvatar}
        />
        {
          !isOwner && <div><input type="file" onChange={onChangePhoto} /></div>
        }
        {
          edit
          ? <ProfileData { ...props } profile={profile} editProfileData={editProfileData}/>
          : <EditProfileData
              initialValues={profile}
              profile={profile}
              handleSubmit={props.handleSubmit}
              error={props.error}
              onSubmit={onSaveProfileData} />
        }
      </div>
      <strong>Status</strong>:
      <ProfileStatus
        status={props.status}
        isOwner={isOwner}
        updateUsersProfileStatus={props.updateUsersProfileStatus}
      />
    </div>
  )
}

export default ProfileInfo;
