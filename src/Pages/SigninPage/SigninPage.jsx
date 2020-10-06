import React,{useState} from 'react';
import './SigninPage.css';

import {GoogleLogin} from 'react-google-login';
import Axios from "axios";
import {useHistory} from 'react-router-dom';

const SigninPage: React.FC = () => {

	const [channelName, setChannelName] = useState("");
	const [signInOption, setSignInOption] = useState("");

	let history = useHistory();

	const responseGoogle = (res : any) => {
		console.log(res);

		const name = res.profileObj.name;
		const email = res.profileObj.email;
		const googleId = res.profileObj.googleId;
		const imageUrl = res.profileObj.imageUrl;
		

		Axios.post('http://localhost:3001/user', {
			name: name,
			email: email,
			googleId: googleId,
			channelName: channelName,
			imageUrl: imageUrl,
		}).then((response)=>{
			sessionStorage.setItem("loggedIn", "true");
			sessionStorage.setItem("name", name);
			sessionStorage.setItem("imageUrl", imageUrl);
			sessionStorage.setItem("googleId", googleId);
			history.push('/');
		})
	}


	return (
		<div className="SigninPage">
			<div className="Container">

				{signInOption== "" ? (
					<div className="body">
						<button 
						id="bttn" 
						onClick={()=> setSignInOption('create')}
						>
							Create Account
						</button>
						<button
						 id="bttn"
						 onClick={()=> setSignInOption('Sign In')}
						 >
						 	Sign In
						 </button>
					</div>
					) : (
					<div>
						<div className="top">
							<h1>
								{signInOption=='create' ? 'Creat Account' : 'Sign In'} with
								 Google
							</h1>
						</div>	


						<div className="body">
						{signInOption=="create" && (
							<input 
							type="text"
							placeholder="Channel Name..."
							onChange={(event: React.changeEvent<HTMLInputElement>)=>{
								setChannelName(event.target.value)
							}}
							 />
						 )}
							<GoogleLogin 
							clientId="319450936651-c08tkngcg60025n6p278jhqtkljc51h2.apps.googleusercontent.com"
							buttonText="SignIn"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={'single_host_origin'}
							/>
						</div>
						</div>
					)}

					
			</div>
		</div>
		)
}

export default SigninPage;	