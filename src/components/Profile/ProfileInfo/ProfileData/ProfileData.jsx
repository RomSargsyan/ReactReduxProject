import React from 'react';
import UserAvatar from './../../../../assets/images/UserAvatar.png';

const ProfileData = ({ profile, editProfileData, isOwner, saveProfilePhoto }) => {
	const onChangePhoto = (event) => {
		if (event.target.files.length > 0) {
			saveProfilePhoto(event.target.files[0])
		}
	}

	return (
		<div>
			<div className="edit-profile">
				{!isOwner && <button className="btn btn-success" onClick={editProfileData}>Edit</button>}
			</div>
			<div className="row">
				<div className="col-6">
					<div className="pl-4">
						<img
							alt="profile"
							src={profile.photos.small || UserAvatar}
							className="rounded-circle p-2 user-avatar"
						/>
						{!isOwner && <div><input type="file" onChange={onChangePhoto} /></div>}
					</div>
					<ul className="list-group list-group-flush pt-3">
						<li className="list-group-item">
							<strong>Full Name </strong> {profile.fullName}
						</li>
						<li className="list-group-item">
							<strong>About me</strong> {profile.aboutMe || '-----'}
						</li>
						<li className="list-group-item">
							<strong>looking For a Job</strong> {profile.lookingForAJob ? 'Yes' : 'No'}
						</li>
						<li className="list-group-item">
							<strong>Job Skills</strong> {profile.lookingForAJobDescription || '----'}
						</li>
					</ul>
				</div>
				<div className="col-6">
					<ul className="list-group list-group-flush">
						{Object.keys(profile.contacts).map((key, index) => {
							return <li key={key} className="list-group-item">
								<strong>{key}</strong> {profile.contacts[key] || '-----'}
							</li>
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProfileData;
