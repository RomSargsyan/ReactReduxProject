import React from 'react';
import style from './../../Profile.module.css';

const ProfileData = ({profile, editProfileData, isOwner}) => {
  return (
    <div>
      <div className={style.name}>
        {profile.fullName}
      </div>
      <div>
        <strong>About me</strong>:  {profile.aboutMe}
      </div>
      <div>
        <strong>looking For a Job</strong>: {profile.lookingForAJob? 'Yes' : 'No'}
      </div>
      <div>
        <strong>Job Skills</strong>: {profile.lookingForAJobDescription}
      </div>
      <div>
        <strong>Contacts</strong>: {Object.keys(profile.contacts).map((key, index) => {
          return <div key={key} className={style.social}>
            <strong>{key}</strong>: {profile.contacts[key]}
          </div>
        } )}
      </div>
       {!isOwner && <button onClick={editProfileData}>Edit</button> }
    </div>

  )
}

export default ProfileData;
