import React, { useState } from 'react';
import './UploadPage.css';
import CloseIcon from '@material-ui/icons/Close';

const UploadPage: React.FC = () => { 

	const [fileSelected, setFileSelected] = useState('');

	return(
		<div className="UploadPage">
			{fileSelected == '' ? (
			<div className="SelectFileContainer">
				<div className="topSection">
					<div className="leftSide">
						<h2>Upload Vedio</h2>
					</div>
					<div className="rightSide">
						<CloseIcon />
					</div>
				</div>
				<div className="body">
					<h1>Upload a vedio from your computer</h1>
					<input 
						type="file"
						id="uploadInput"
						accept="vedio/mp4"
					 	style= {{display: 'none'}}
					 	onChange={(e)=> setFileSelected(e.target.value)}

					 	 />
					 	 <div id="uploadButton">
					 	 <label htmlFor="uploadInput">Select file</label>
					 	 </div>
				</div>
			</div>	
			)
			: (
				<h1>{fileSelected}</h1>
				)
		}
		</div>
		)

}

export default UploadPage;