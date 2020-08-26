import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "./../Form/FormControl";

const LoginForm = ({ handleSubmit, captchaUrl, error }) => (
	<form onSubmit={handleSubmit}>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-xl-10 col-lg-12 col-md-9">
					<div className="card o-hidden border-0 shadow-lg my-5">
						<div className="card-body p-0">
							<div className="row">
								<div className="col-lg-6 d-none d-lg-block bg-login-image" />
								<div className="col-lg-6">
									<div className="p-5">
										<div className="text-center">
											<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
										</div>
										<div className="form-group">
											<label htmlFor="email">Email</label>
											<Field
												component={Input}
												type="email"
												name="email"
												className="form-control form-control-user"
												placeholder="Please type email-address"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="password">Password</label>
											<Field
												component={Input}
												type="password"
												name="password"
												className="form-control form-control-user"
												placeholder="Please type password"
											/>
										</div>
										<div className="form-group">
											<div className="custom-control custom-checkbox small">
												<Field
													type="checkbox"
													component={Input}
													name="rememberMe"
													className="custom-control-input"
												/>
												<label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
											</div>
										</div>
										{!!captchaUrl && (
											<div className="form-group">
												<img src={captchaUrl} alt="captcha" />
												<Field
													component={Input}
													type="text"
													name="captcha"
													placeholder="Please type image string"
												/>
											</div>
										)}
										<button className="btn btn-primary btn-user btn-block">
											Login
                    </button>
										<hr />
										<div className="text-center">
											<a className="small" href="forgot-password.html">Forgot Password?</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
);

export default reduxForm({ form: "login" })(LoginForm);