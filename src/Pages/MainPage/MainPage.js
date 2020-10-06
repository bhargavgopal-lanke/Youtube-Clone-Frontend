import React, {useContext} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './MainPage.css';
/*import { ToggleSidebarContext } from '../../Helpers/Context';*/

export default function MainPage() {
	/*const { showSidebar, setShowSidebar } = useContext(ToggleSidebarContext);*/
	return(
			<div className="MainPage">
				<div className="center">
				<Sidebar />
					
					<div className="VideoView">

					</div>
				</div>

			</div>
		)
}