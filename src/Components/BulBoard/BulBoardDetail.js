import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import "../../css/BulBoardDetail.css";


function BulBoardDetail() {
	const { auth, setAuth } = useContext(AuthContext)
	const {seq} = useParams();

	const [bulletinboard, setbulletinboard] = useState({});


	const getBulBoardDetail = async () => {

		await axios.get(`http://localhost:8080/bulletinboard/${seq}`, {params: {readerId: auth ? auth : ""}})
		.then((resp) => {
			console.log("[getBulBoardDetail.js] getBulBoardDetail() success :D");
			console.log(resp.data);
			setbulletinboard(resp.data.bulletinboard)
		})
		.catch((err) => {
			console.log("[getBulBoardDetail.js] getBulBoardDetail() error :<");
			console.log(err);
		});
		

	}

	useEffect(() => {
		getBulBoardDetail();
	}, []);

	return (
	<>
	<div className="title_box">
	  <font className="tboxfonttitle" >{bulletinboard.title} <br/></font>
	  <font className="tboxfontright" >{bulletinboard.createdAt}</font>
	</div>

	<div className="id_box">
	  <font className="tboxfontid" >작성자: {bulletinboard.id} <br/></font>
	  <font className="tboxfontright idbox" >댓글수</font>
	  <font className="tboxfontright idbox" >조회수</font>
	</div>

	<div className="content_box">
	
	</div>

	
	
	
	</>
		
	);

}

export default BulBoardDetail;