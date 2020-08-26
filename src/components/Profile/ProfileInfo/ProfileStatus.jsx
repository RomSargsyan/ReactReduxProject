import React, { useState, useEffect } from "react";

const ProfileStatus = ({ status, isOwner, updateUsersProfileStatus }) => {
	const [editMode, setEditMode] = useState(false);
	const [myStatus, setStatus] = useState(status);
	const onEditMode = () => {
		if (!isOwner) {
			setEditMode(true);
		}
	};
	const offEditMode = () => {
		setEditMode(false);
		updateUsersProfileStatus(myStatus);
	};
	const onChangeStatus = event => {
		setStatus(event.target.value);
	};

	useEffect(() => {
		setStatus(status);
	}, [status]);

	return (
		<div>
			{!editMode ? (
				<div onDoubleClick={onEditMode}>{myStatus || "-----"}</div>
			) : (
					<div>
						<input
							type="text"
							autoFocus={true}
							onBlur={offEditMode}
							onChange={onChangeStatus}
							value={myStatus}
						/>
					</div>
				)}
		</div>
	);
};

export default ProfileStatus;
