import React, { useState } from 'react';
import ProfileStatus from './ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import EditProfileData from './ProfileData/EditProfileData';

const ProfileInfo = ({ saveProfilePhoto, saveProfileData, profile, isOwner, ...props }) => {
	const [edit, setEdit] = useState(true)
	const onSaveProfileData = (value) => {
		saveProfileData(value).then(() => {
			setEdit(true)
		})
	}
	const editProfileData = () => {
		setEdit(false)
	}
	return (
		<div>
			<div>
				{
					edit
						? <div>
							<ProfileData
								{...props}
								isOwner={isOwner}
								saveProfilePhoto={saveProfilePhoto}
								profile={profile}
								editProfileData={editProfileData}
							/>
							<strong>Status</strong>:
         					<ProfileStatus
								status={props.status}
								isOwner={isOwner}
								updateUsersProfileStatus={props.updateUsersProfileStatus}
							/>
						</div>
						: <EditProfileData
							initialValues={profile}
							profile={profile}
							handleSubmit={props.handleSubmit}
							error={props.error}
							onSubmit={onSaveProfileData} />
				}
			</div>
		</div>
	)
}

export default ProfileInfo;
