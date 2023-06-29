import { Routes, Route } from "react-router-dom";

import Home from "../app/Home"
import Test from "../app/Test"
import Join from "../member/Join"
import Login from "../member/Login"
import Logout from "../member/Logout"

import BbsList from "../bbs/BbsList"


function Router() {

	return (
			<Routes>
				<Route path="/bbslist" element={<BbsList />}></Route>

				<Route path="/" element={<Home />}></Route>
				<Route path="/test" element={<Test/>}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/join" element={<Join />}></Route>
				<Route path="/logout" element={<Logout />}></Route>
			</Routes>
	);
}

export default Router;