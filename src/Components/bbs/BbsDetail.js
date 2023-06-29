import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";



function BbsDetail() {
	const { auth, setAuth } = useContext(AuthContext)
	const {seq} = useParams();

	const [bulletinboard, setbulletinboard] = useState({});


	const getBbsDetail = async () => {

		await axios.get(`http://localhost:8080/bulletinboard/${seq}`, {params: {readerId: auth ? auth : ""}})
		.then((resp) => {
			console.log("[BbsDetail.js] getBbsDetail() success :D");
			console.log(resp.data);
			setbulletinboard(resp.data.bulletinboard)
		})
		.catch((err) => {
			console.log("[BbsDetail.js] getBbsDetail() error :<");
			console.log(err);
		});
		

	}

	useEffect(() => {
		getBbsDetail();
	}, []);

	return (
		<>
	{bulletinboard.id} <br/>
	{bulletinboard.title} <br/>
	{bulletinboard.content} <br/>
	{bulletinboard.createdAt}

	
		</>
		
	);

}

export default BbsDetail;