import React from "react";
import { NavLink } from "react-router-dom";
import userAvatar from "./../../assets/images/UserAvatar.png";

const User = ({ user, isFollowing, onFollow, onUnfollow }) => {
	return (
		<tbody>
			<tr>
				<td>
					<div className="row">
						<NavLink to={`/profile/${user.id}`} className="nav-link col-1">
							<img
								className="rounded-circle image-profile"
								alt="User avatar"
								src={user.photos.small || user.photos.large || userAvatar}
							/>
						</NavLink>
						<div className="col-11 pr-5">{user.name}</div>
					</div>
				</td>
				<td>{user.status}</td>
				<td>Armenia</td>
				<td>Yerevan</td>
				<td>
					{user.followed ? (
						<button
							className="btn btn-success text-whithe"
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
