import React,{ useEffect, useState, useContext } from 'react';
import './Navbar.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { ToggleSidebarContext } from '../../Helpers/Context';


const Navbar: React.FC = () => {

	const [loggedIn, setloggedIn] = useState(false);
	const [profilePicture, setProfilePicture] = useState("");

	const {showSidebar, setShowSidebar} = useContext(ToggleSidebarContext);

	useEffect(()=> {
		if(sessionStorage.getItem('loggedIn') === 'true' ) {
			setloggedIn(true);
			setProfilePicture(sessionStorage.getItem("imageUrl"));
		}

	}, [sessionStorage.getItem('loggedIn')] )



	return (
		<div>
			<div className="navbarContainer">
				<div className="left"> 
					<button id="sidebarToggle" onClick={()=> {setShowSidebar(!showSidebar)}} >
						<MenuIcon id="icon"   />
					</button>
					<div 
					id="homeBtn"
					onClick={()=> (window.location.pathname = '/')}


					>
						<YouTubeIcon id="icon" style={{color: 'red'}} />
						<h1>YouTube</h1>
					</div>
				</div>
				<div className="center">
					<input id="searchBar" placeholder="Search" />
					<button id="searchButton">
						<SearchIcon style={{color: 'grey'}} />
					</button>
				</div>
				<div className="right">
					<button 
						id="createVedio" 
						onClick={()=> window.location.pathname= "/upload"} >
							<AddBoxIcon id="icon"   />
					</button>

						{loggedIn ? (
							<img 
							id="profilePic" 
							src={profilePicture}
							onClick={()=> (window.location.pathname='/account')}
							 />	
						) : (
						<button 
						 id="signInButton"
						 onClick={()=> {
						 	window.location.pathname = "signin";
						 }} 
						 >
						 Sign In

						 </button>
						)}
				
				</div>
			</div>
		</div>
		)
}

export default Navbar;