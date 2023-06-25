import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Header() {

	  const { auth, setAuth } = useContext(AuthContext);

	return (
		<div classNameNames="container">
		<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
		  <div className="col-md-3 mb-2 mb-md-0">
			<a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
			  <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
			</a>
		  </div>
	
		  <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
			<li><Link className="nav-link px-2 link-secondary" to="/"><i className="fas fa-home"></i> Home</Link></li>
			<li><Link className="nav-link px-2 link-secondary" to="/test"><i className=""></i> test</Link></li>
			<li><a href="#" className="nav-link px-2">Pricing</a></li>
			<li><a href="#" className="nav-link px-2">FAQs</a></li>
			<li><a href="#" className="nav-link px-2">About</a></li>
		  </ul>
	
		  <div className="col-md-3 text-end">

			<Link type="button" className="btn btn-outline-primary me-2" to="/login">로그인</Link>
	
			<Link className="btn btn-primary" activeClassName="active" to="/join">Sign Up</Link>
		  </div>
		</header>
	  </div>
	);
}

export default Header;