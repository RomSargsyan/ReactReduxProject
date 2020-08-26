import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from './../../../Form/FormControl';

const EditProfileData = ({ profile, handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="save-profile">
				<button className="btn btn-success">Save</button>
			</div>
			<div className="row">
				<div className="col-6">
					<strong>Personal Info</strong>:
          <div className="input-group pt-2">
						<div className="w-100">
							<Field 
								type="text" 
								className="form-control" 
								component={Input} 
								name="fullName" 
								placeholder="Full name" 
							/>
						</div>
					</div>
					<div className="input-group pt-2">
						<div className="w-100">
							<Field 
								type="text" 
								className="form-control" 
								component={Input} 
								name="aboutMe" 
								placeholder="About Me" 
							/>
						</div>
					</div>
					<div className="input-group pt-2 pb-2">
						<Field 
							type="checkbox" 
							className="form-control-checkbox" 
							component={Input} 
							name="lookingForAJob" 
						/>
						<strong className="pl-2">Looking for a job</strong>
					</div>
					<div className="input-group pt-2">
						<div className="w-100">
							<Field 
								type="text" 
								className="form-control" 
								component={Input} 
								name="lookingForAJobDescription" 
								placeholder="Looking for a job description" 
							/>
						</div>
					</div>
				</div>
				<div className="col-6">
					<strong>Contacts</strong>:
        			{
						Object.keys(profile.contacts).map(key => {
							return <div className="input-group pt-2" key={key}>
								<div className="w-100">
									<Field 
										type="text" 
										className="form-control" 
										component={Input} 
										name={'contacts.' + key} 
										placeholder={key} 
									/>
								</div>
							</div>
						})
					}
				</div>
			</div>
			<div className={error}>
				{error}
			</div>
		</form>
	)
}

export default reduxForm({ form: 'edit-profile' })(EditProfileData);
