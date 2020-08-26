import React from 'react';

const Header = ({ isAuth, login, logout }) => {
	return (
		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
				<i className="fa fa-bars" />
			</button>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					{isAuth && <div className="nav-link">
						<span className="mr-2 d-none d-lg-inline text-gray-600 large">{login}</span>
						<button
							onClick={logout}
							className="btn btn-primary btn-user btn-block mr-2 d-none d-lg-inline text-white-600 large"
							type="submit"
						>
							logout
          				</button>
					</div>
					}
				</li>
			</ul>
		</nav>
	)
}

export default Header;