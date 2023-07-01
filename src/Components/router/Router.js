import { Routes, Route } from "react-router-dom";

import Home from "../app/Home"
import Join from "../member/Join"
import Login from "../member/Login"
import Logout from "../member/Logout"
import BulBoardDetail from "../BulBoard/BulBoardDetail"
import BulBoardWrite from "../BulBoard/BulBoardWrite"
import BulBoardList from "../BulBoard/BulBoardList"


function Router() {

	return (
			<Routes>
				<Route path="/bulboardlist" element={<BulBoardList />}></Route>
				<Route path="/bulboardwrite" element={<BulBoardWrite />}></Route>
				<Route path="/bulboarddetail/:seq" element={<BulBoardDetail />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/join" element={<Join />}></Route>
				<Route path="/logout" element={<Logout />}></Route>
			</Routes>
	);
}

export default Router;