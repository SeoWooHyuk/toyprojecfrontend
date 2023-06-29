import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function Header() {

	const { auth, setAuth } = useContext(AuthContext);

	return (
	<>
		<div class="b-example-divider"></div>
		<div classNameNames="container">
		<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
		  <div className="col-md-3 mb-2 mb-md-0">
			<a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
			  <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
			</a>
		  </div>
	
		  <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
			<li><Link className="nav-link px-2 link-secondary" to="/"><i className="fas fa-home"></i> Home</Link></li>
			<li><Link className="nav-link px-2 link-secondary" to="/test"><i className=""></i> 공부용 테스트</Link></li>
			<li><Link className="nav-link px-2 link-secondary" to="/bbslist"><i className=""></i> 글목록</Link></li>
			<li><a className="nav-link px-2 link-secondary" href="http://localhost:8080/swagger-ui/index.html"><i className=""></i> 스웨거</a></li>
		  </ul>
	
		  <div className="col-md-3 text-end">
			{
				(auth) ?
				<>
					{/* 회원 정보 */}
					<Link type="text" className="btn btn-outline-primary me-2" to="#">{auth}님 반갑습니다</Link>
					{/* 로그아웃 */}
					<Link className="btn btn-primary" activeClassName="active" to="/logout">로그아웃</Link>

				</>
				:
				<>
					{/* 로그인 */}
					<Link type="button" className="btn btn-outline-primary me-2" to="/login">로그인</Link>

					{/* 회원가입 */}
					<Link className="btn btn-primary" activeClassName="active" to="/join">Sign Up</Link>
				</>

			}
		  </div>
		</header>
	  </div>
	</> 
	);
}

export default Header;