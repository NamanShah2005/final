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

import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Club, setClub] = useState("");
  // const [Admin, setAdmin] = useState('');
  const [Designation, setDesignation] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router's useNavigate hook
  const [Admin, setAdmin] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin(event.target.value);
  };

  useEffect(() => {
    console.log(Email);
    console.log(Password);
    console.log(Club);
    console.log(Designation);
    console.log(Name);
    console.log(Admin);
  });

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [Society, setSociety] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/club/all");
        setItems(response.data.clubs);
        console.log(response.data.clubs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const SubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const { data } = await axios.post(
        "http://localhost:3005/register",
        {
          Name,
          Password,
          Email,
          Club,
          Designation,
          Admin,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // Display error message
      toast.error("Some Error");
    }
  };

  return (
    <>
      <div id={"register-page"}>
        <div id={"register-card"} onClick={(e) => e.stopPropagation()}>
          <div id={"register-title"}>Register</div>
          <form id={"register-form"} onSubmit={SubmitHandler}>
            <div id="register-input-group">
              <div className="form-group">
                <div>
                <div className="radio-group">
                  <label htmlFor="panel">
                    <input
                      type="radio"
                      name="checkbox"
                      value="Admin"
                      checked={Admin === "Admin"}
                      onChange={handleOptionChange}
                    />{" "}
                    Admin
                  </label>
                </div>
                <div className="radio-group">
                  <label htmlFor="panel">
                    <input
                      type="radio"
                      name="checkbox"
                      value="Non-Admin"
                      checked={Admin === "Non-Admin"}
                      onChange={handleOptionChange}
                    />{" "}
                    Non-Admin
                  </label>
                </div>
                </div>
              
                <label htmlFor="email" id="email">
                  Name{" "}
                </label>
                <input
                  id="email"
                  type={"text"}
                  placeholder={"Name"}
                  required
                  value={Name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="Designation" id="email">
                  Designation
                </label>
                <input
                  id="email"
                  type={"text"}
                  placeholder={"Designation"}
                  required
                  value={Designation}
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                />
                </div>
                <div className="form-group">
                <label htmlFor="email" id="email">
                  Email{" "}
                </label>
                <input
                  id="email"
                  type={"text"}
                  placeholder={"Email"}
                  required
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              <label htmlFor="password" id="email">
                Password{" "}
              </label>
              <input
                id="password"
                type={"password"}
                placeholder={"Password"}
                required
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="club" id="email">
                Club{" "}
              </label>
              <select
                name="club"
                id="Email"
                value={Club}
                onChange={(e) => {
                  setClub(e.target.value);
                }}
              >
                {items.map((item, index) => {
                  return <option value={item.Name}>{item.Name}</option>;
                })}
              </select>
            </div>
            
            </div>
            <div id="register-button">
            <input type="submit" value="Register" />
            </div>
          </form>
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

export default Register;
