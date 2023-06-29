import React from 'react';
import "../../css/home.css"

function Data({ data }) {
	return (
		<li>{data.item}</li>
	);
  }

function Home() {
	
	const datas = [
		{
		  id: 1,
		  item: 'velopert',
		},
		{
		  id: 2,
		  item: 'tester',

		},
		{
		  id: 3,
		  item: 'liz',
	
		}
	  ];

	return (
	<>
	<div className="ba_box"> 
		<div className="banner_sec1">
			<h1>
					스프링부트 3.10 개인 포트폴리오
			</h1>
			<div method="get" action="/search" id="search2">
			<input type="text" size="20" placeholder="개인프로젝트 사용기술 ↕"/>
			</div>
			<ul>
				
			{datas.map(data => (
			<Data data={data} key={data.id} />
			))}

			</ul>
		</div>

		<div className="banner_sec2">
			<div id="slider" className="slider" >
				<button className="control_next"></button>
				<button className="control_prev"></button> 
				<ul>	
					<li className="slideli"><img alt="" src="/images/banner.jpeg" /></li>
				</ul> 
			</div>
		</div>
	</div>
	</>
	);
}

export default Home;