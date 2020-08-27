import React from "react";
import { NavLink } from "react-router-dom";
import userAvatar from "./../../assets/images/UserAvatar.png";

const User = ({ user, isFollowing, onFollow, onUnfollow }) => {
	console.log(user);
	return (
		<tbody>
			<tr>
				<td>
					<NavLink to={`/profile/${user.id}`} className="nav-link">
						<div className="row align-items-center">
							<div className="col-1">
								<img
									className="rounded-circle image-profile"
									alt="User avatar"
									src={user.photos.small || user.photos.large || userAvatar}
								/>
							</div>
							<div className="col-5">{user.name}</div>
						</div>
					</NavLink>
				</td>
				<td>{user.status}</td>
				<td>Armenia</td>
				<td>Yerevan</td>
				<td>
					{!user.followed ? (
						
						<button
							className="btn btn-primary text-whithe"
							disabled={isFollowing.some(id => id === user.id)}
							onClick={() => {
								onFollow(user.id);
							}}
						>
							Follow
						</button>
					) : (
							<button
								className="btn btn-danger text-whithe"
								disabled={isFollowing.some(id => id === user.id)}
								onClick={() => {
									onUnfollow(user.id);
								}}
							>
								Unfollow
							</button>
						)}
				</td>
			</tr>
		</tbody>

	)
}

export default User;
