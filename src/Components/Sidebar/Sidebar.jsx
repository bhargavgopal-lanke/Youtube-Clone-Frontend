import React from 'react';

import { SideBarData } from './SideBarData';

import './Sidebar.css'; 

const Sidebar: React.FC = () => {

	return(
		<div>
			<div style={{ width: 250 }}>
				
				<ul className="sidebarRows">
					{SideBarData.map((val, key)=>{
						return(
						<li key={key} 
						className="row"
						 id={val.path === window.location.pathname ? "active" : ""}
						 onClick={()=> (window.location.pathname = val.path) } >
							<div id="iconContainer">
								{val.icon}
							</div>
							<div id="titleContainer">
								<h3>{val.title}</h3>
							</div>							
						</li>
						)
					})}
				</ul>
			</div>
		</div>
		)
}

export default Sidebar;