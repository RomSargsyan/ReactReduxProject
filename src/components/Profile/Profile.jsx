import React from "react";

import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostForm from "./../Form/ProfilePostForm";

const Profile = ({ profile, addPost, posts, ...props }) => {
	const onAddPost = value => addPost(value.newTextPost);

	if (!profile) return <h1>yo yo</h1>;

	return (
		<div className="container-fluid content-fluid">
			<ProfileInfo {...props} profile={profile} />
			<div>
				<h3>New Post</h3>
				<PostForm onSubmit={onAddPost} {...props} />
				{posts.map(el => (
					<Posts key={el.id} message={el.message} />
				))}
			</div>
		</div>
	);
};

export default Profile;
