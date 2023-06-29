/* 로그인 컴포넌트 */

import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

function Login() {

	const { auth, setAuth } = useContext(AuthContext);
	const { headers, setHeaders } = useContext(HttpHeadersContext);

	const navigate = useNavigate();

	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");

	const changeId = (event) => {
		setId(event.target.value);
	}

	const changePwd = (event) => {
		setPwd(event.target.value);
	}

	const login = async () => {

		const req = {
			id: id,
			pwd: pwd
		}

		await axios.post("http://localhost:8080/user/login", req)
		.then((resp) => {
			console.log("[Login.js] login() success :D");
			console.log(resp.data);

				alert(resp.data.id + "님, 성공적으로 로그인 되었습니다 🔐");

				// JWT 토큰 저장
				localStorage.setItem("bbs_access_token", resp.data.jwt);
				localStorage.setItem("id", resp.data.id);

				setAuth(resp.data.id); // 사용자 인증 정보(아이디 저장)
				setHeaders({"Authorization": `Bearer ${resp.data.jwt}`}); // 헤더 Authorization 필드 저장

				navigate("/");
			

		}).catch((err) => {
			console.log("[Login.js] login() error :<");
			console.log(err);

			alert("⚠️ " + err.response.data);
		});
	}

	return (
		<div className="text-center">
		<img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
		<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
	
		<div className="form-floating">
		  <input type="email" className="form-control"  value={id} onChange={changeId} placeholder="Id"/>
		</div>
		
		<div className="form-floating">
		  <input type="password" className="form-control" value={pwd} onChange={changePwd} placeholder="Password"/>
		</div>
	
		<button className="w-100 btn btn-lg btn-primary" onClick={login}><i classNameName="fas fa-sign-in-alt"></i> 로그인</button>
		</div>
	);
}

export default Login;