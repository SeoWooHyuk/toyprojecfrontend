import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";
import "../../css/BulBoardDetail.css";
import Pagination from "react-js-pagination";
import "../../css/page.css";


function BulBoardDetail() {
	const {auth, setAuth } = useContext(AuthContext)
	const [content, setContent] = useState("");
	const {seq} = useParams();
	const { headers, setHeaders } = useContext(HttpHeadersContext);

	const navigate = useNavigate();

	//페이징
	const [page, setPage] = useState(1);
	const [totalCnt, setTotalCnt] = useState(0);

	const changeContent = (event) => {
		setContent(event.target.value);
	}

	const [bulletinboard, setbulletinboard] = useState({});
	const [bsReplyList, setbsReplyList] = useState([]);
	const [createdAt, setcreatedAt] = useState({}); //게시글 시간 문자열자름

	const req = {
		id: localStorage.getItem("id"), 
		content: content
	}


	const createBulBoard = async() => {
		const req = {
			id: localStorage.getItem("id"), 
			content: content
		}

		await axios.post(`http://localhost:8080/bulletinboard/${seq}/reply`, req, {headers: headers})
		.then((resp) => {
			console.log("[BbsWrite.js] createBulBoard() success :D");
			console.log(resp.data);
			window.location.reload();
		})
		.catch((err) => {
			console.log("[BbsWrite.js] createBulBoard() error :<");
			console.log(err);
		});
	};

	const getBulBoardDetail = async () => {
		await axios.get(`http://localhost:8080/bulletinboard/${seq}`, {params: {readerId: auth ? auth : ""}})
		.then((resp) => {
			console.log("[getBulBoardDetail.js] getBulBoardDetail() success :D");
			console.log(resp.data);

			// const createdAt = resp.data.bulletinboard.createdAt;

			setbulletinboard(resp.data.bulletinboard)
			setcreatedAt(resp.data.bulletinboard.createdAt.slice(0, 10)) //달력 문자열 잘라서 보내기
			
	
		})
		.catch((err) => {
			console.log("[getBulBoardDetail.js] getBulBoardDetail() error :<");
			console.log(err);
		});
		
	}

	const getBulBoardReplyList = async () => {

		await axios.get(`http://localhost:8080/bulletinboard/${seq}/reply`,{ params: { "page": page } })
			.then((resp) => {
				console.log("[BbsList.js] useEffect() success :D");
				console.log(resp.data);
				setbsReplyList(resp.data.bsReplyList)
				setTotalCnt(resp.data.pageCnt);
				
			})
			.catch((err) => {
				console.log("[BbsList.js] useEffect() error :<");
				console.log(err);

			});
	}


	const deleteBulBoard = async () => {

		await axios.delete(`http://localhost:8080/bulletinboard/${seq}`)
		.then((resp) => {
			console.log("[BbsDetail.js] deleteBbs() success :D");
			console.log(resp.data);

			if (resp.data.deletecheck === 1) {
				alert("게시글을 성공적으로 삭제했습니다 :D");
				navigate("/bulboardlist");
			}

		}).catch((err) => {
			console.log("[BbsDetail.js] deleteBbs() error :<");
			console.log(err);
		});

	}

	useEffect(() => {

		getBulBoardDetail();
		getBulBoardReplyList(1);
	}, []);


	const changePage = (page) => {
		setPage(page);
		getBulBoardReplyList(page);
	}


	
	const updatebulboard = {
		seq: bulletinboard.seq,
		id: bulletinboard.id,
		title: bulletinboard.title,
		content: bulletinboard.content
	}	
	
	return (
	<>
	<div className="title_box">
	
	  <font className="tboxfonttitle" >{bulletinboard.title} <br/></font>
	  <font className="tboxfontright" >작성일 :{JSON.stringify(createdAt).slice(1, -1)}</font>
	</div>

	<div className="id_box">
	  <font className="tboxfontid" >작성자: {bulletinboard.id} <br/></font>
	  <font className="tboxfontright idbox" >댓글수 {totalCnt }</font>
	  <font className="tboxfontright idbox" >조회수 {bulletinboard.readCount}</font>
	</div>

	<div className="content_box">
	
	 <p style={{ whiteSpace: 'pre-line' }}>{bulletinboard.content}</p>
	
	</div>

	<div>
	{
		/* 자신이 작성한 게시글인 경우에만 수정 삭제 가능 */
		(localStorage.getItem("id") == bulletinboard.id) ?
			<>
				<Link className="btn btn-outline-secondary"  to="/bulBoardupdate" state={{ bulletinboard: updatebulboard }}><i className="fas fa-edit"></i> 수정</Link> &nbsp;
				<button className="btn btn-outline-danger"  onClick={deleteBulBoard}><i className="fas fa-trash-alt"></i> 삭제</button>
			</>
		:
		null
	}
	</div>

	

	<div className="id_box">
	  <font className="tboxfontid" >댓글</font>
	</div>

	<div className="reply_box">
		<table>
			<tbody>
			{
				bsReplyList.map(data => {
					return (
					<>
					<tr>
					<td className="reply">작성자: {data.id} 작성일:{data.createdAt.slice(0,10)}</td>
						
					</tr>
					<tr>
						<td>{data.content}</td>
					</tr>
					<tr>
						<p className="co"></p>
					</tr>
				
					</>
					)
				})
			}		
			</tbody>
		</table>

		<Pagination className="pagination"
				activePage={page}
				itemsCountPerPage={10}
				totalItemsCount={totalCnt}
				pageRangeDisplayed={5}
				prevPageText={"‹"}
				nextPageText={"›"}
				onChange={changePage} />
	</div>


	<div className="reply_box_create">
		<font className="tboxfontid" >댓글 작성</font>
		<input type="text" className="form-control"  value={localStorage.getItem("id")} size="50px" readOnly />
		<textarea className="form-control" value={content} onChange={changeContent} rows="1"></textarea>
		<button className="btn btn-outline-secondary" onClick={createBulBoard}><i className="fas fa-pen"></i> 등록하기</button>
	</div>

	
	</>
		
	);

}

export default BulBoardDetail;