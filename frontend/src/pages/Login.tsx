import { Link } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [pass, setPass] = useState('');

	return (
		<>
			<div id={"login-page"}>
				<div id={"login-card"} onClick={e => e.stopPropagation()}>
					<div id={"login-header"}>
						<img src={"/logo.jpg"} alt={"Logo"}/>
						<div id={"login-title"}>Login to Student Gymkhana</div>
					</div>
					<div id={"login-body"}>
						<form id={"login-form"}>
							<label htmlFor="email" id="email">Email </label>
							<input id="email" type={"text"} placeholder={"Email"} required/>
							<label htmlFor="password" id="email">Password </label>
							<input id="password" type={"password"} placeholder={"Password"} required/>
							<div id={"login-button"}>
								<button type={"submit"}>Login</button>
							</div>
						</form>
					</div>
					<div id={"close-button"}>
						<Link to="/">
							<i className={"bi bi-x"}></i>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
