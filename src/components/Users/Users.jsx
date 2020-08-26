import React from "react";
import Pegination from "./../Common/Pegination/Pegination";
import User from "./User";

const Users = ({ totalUsersCount, users, onFollow, onUnfollow, isFollowing, ...props }) => {
	if (!totalUsersCount) {
		return <h1>yo yo</h1>;
	}

	return (
		<div className="container-fluid content-fluid">
			<h1 className="h3 mb-2 text-gray-800">Users</h1>
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Users Table</h6>
				</div>
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
							<thead>
								<tr>
									<th>Name</th>
									<th>Status</th>
									<th>City</th>
									<th>Country</th>
									<th>Button</th>
								</tr>
							</thead>
							{users.map(user => {
								return <User
									user={user}
									key={user.id}
									onFollow={onFollow}
									onUnfollow={onUnfollow}
									isFollowing={isFollowing}
								/>;
							})}
						</table>
						<Pegination totalUsersCount={totalUsersCount} {...props} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
