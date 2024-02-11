// import { Link } from 'react-router-dom';
// import './Login.scss';
// import { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const Login = () => {
// 	const [Email, setEmail] = useState('');
// 	const [Password, setPassword] = useState('');

// 	const SubmitHandler = async () => {
//         try {
//             const { data } = await axios.post('http://localhost:3005/club/new', {
//                 Email,
// 				Password
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
            
//             if (data.success) {
//                 toast.success(data.message);
//             } else {
//                 toast.error(data.message);
//             }
//         } catch (error) {
//             toast.error("Some Error");
//         }
//     };

// 	return (
// 		<>
// 			<div id={"login-page"}>
// 				<div id={"login-card"} onClick={e => e.stopPropagation()}>
// 					<div id={"login-header"}>
// 						<img src={"/logo.jpg"} alt={"Logo"}/>
// 						<div id={"login-title"}>Login to Student Gymkhana</div>
// 					</div>
// 					<div id={"login-body"}>
// 						<form id={"login-form"}>
// 							<label htmlFor="email" id="email">Email </label>
// 							<input id="email" type={"text"} placeholder={"Email"} required value = {Email} onChange={(e) => {setEmail(e.target.value)}}/>
// 							<label htmlFor="password" id="email">Password </label>
// 							<input id="password" type={"password"} placeholder={"Password"} required value = {Password} onChange={(e) => {setPassword(e.target.value)}}/>
// 							<div id={"login-button"}>
// 								<button type={"submit"}>Login</button>
// 							</div>
// 						</form>
// 					</div>
// 					<div id={"close-button"}>
// 						<Link to="/">
// 							<i className={"bi bi-x"}></i>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Login;


import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { log } from 'console';

interface userdetail {
    id: number;
    Name: string;
    Club: string;
    Email: String;
    Password: String;
    Designation: String;
    Admin: String;
}

export const loggedIn = false;

const Login = () => {
    const [user1, setuser1] = useState<userdetail[]>([]);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate(); // React Router's useNavigate hook
    const [login, setLogin] = useState(false);
    
	useEffect(() => {
		console.log(Email)
		console.log(Password)
	})

    const logouthandler = (e) => {
        e.preventDefault();
        try {
            toast.success("logged out successfully");
            setLogin(false)
                // Redirect to the home page
            navigate("/");
        } catch (error) {
            
        }
    }

    const SubmitHandler = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const { data } = await axios.post('http://localhost:3005/login', {
                Email,
                Password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
			// toast.success(data.message);
            console.log(data);
            setuser1(data.user)



            if (data.success) {
                toast.success(data.message);
                setLogin(true)
                // Redirect to the home page
                navigate("/");
            } else {
                // Display error message
                toast.error(data.message);
            }
        } catch (error) {
            // Display error message
            toast.error("Some Error");
        }
    };


    useEffect(() => {
        console.log(login)
    })

    return (
        <>
            <div id={"login-page"}>
                <div id={"login-card"} onClick={e => e.stopPropagation()}>
                    <div id={"login-header"}>
                        <img src={"/logo.jpg"} alt={"Logo"} />
                        <div id={"login-title"}>Login to Student Gymkhana</div>
                    </div>

                    {login ? ( <div id={"login-button"}>
                                    <button type={"submit"} onClick={logouthandler}>Logout</button>
                                </div>)
                                 :
                        (<div id={"login-body"}>
                        <form id={"login-form"} onSubmit={SubmitHandler}>
                            <label htmlFor="email" id="email">Email </label>
                            <input id="email" type={"text"} placeholder={"Email"} required value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor="password" id="email">Password </label>
                            <input id="password" type={"password"} placeholder={"Password"} required value={Password} onChange={(e) => { setPassword(e.target.value) }} />
							<div id="buttons">
                                <div id='register-button'>
                                    <button>
                                    <Link to={"/register"}>Register</Link>
                                    </button>
                                </div>
                                <div id={"login-button"}>
                                    <button type={"submit"}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>) }
                    
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
