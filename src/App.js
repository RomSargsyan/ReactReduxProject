import { connect } from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { appInitiaton } from "./redux/app-reducer";
import { useRoutes } from "./routes";

const App = ({ isAuth, appInitiaton, isInitiation }) => {
	const routes = useRoutes(isAuth)

	useEffect(() => {
		appInitiaton();
	}, [appInitiaton]);

	return (
		<>
			{!isInitiation ? (
				<div>Loading...</div>
			) : (
					<div>
						{routes}
					</div>
				)}
		</>
	);
};

const mapStateToProps = ({ app: { isInitiation }, auth: { isAuth } }) => (
	{ isAuth, isInitiation }
);

export default connect(mapStateToProps, { appInitiaton })(withRouter(App));
