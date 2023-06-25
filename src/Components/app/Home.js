import "../../css/home.css"
function Home() {
	
	const data = [
		"lang","a","b"
	 ]

	return (
	<div className ="ba_box1">
		<div className ="ba_box2"> 
			<div className ="ba_box3">
				<div className ="ba_box4">
					<div className="banner_sec1">
						<h1>
							 스프링부트 3.10 개인 포트폴리오
						</h1>
						<div method="get" action="/search" id="search2">
						<input type="text" size="20" placeholder="개인프로젝트 사용기술 ↕"/>
						</div>
						<ul>
							
						{data.map(item => (
							<li>{item}</li>
						))}
			
						</ul>
					</div>

					<div className="banner_sec2">
						<div id="slider" className="slider" >
							<a className="control_next"></a>
							<a className="control_prev"></a> 
							<ul>	
							<li class="slideli"><img alt="" src="/images/banner.jpeg" /></li>
							</ul> 
						</div>

					</div>

				</div>
			</div>
		</div>

	</div>
	);
}

export default Home;