import './Navbar.scss';
import {Link, NavLink} from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { useEffect, useState } from 'react';
import axios from 'axios';

const links = [
	{name: "Home", path: "/", icon: "bi bi-house-fill"},
	{name: "Generate New Request", path: "/makereq", icon: "bi bi-file-earmark-plus-fill"},
	{name: "Clubs", path: "/clubs", icon: "bi bi-people-fill"},
	{name: "Check Status", path: "/reqstatus", icon: "bi bi-question-circle-fill"},
  {name: "Contact", path: "/contact", icon: "bi bi-telephone-fill"},
]

// useEffect(() => {
	
// 	const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);


// 	const fetchData = async () => {
// 		try {
// 			const response = await axios.get('http://localhost:3005/user/detail');
// 			setItems(response.data.clubs);
// 			console.log(response.data.clubs);
// 			setLoading(false);
// 		} catch (error) {
// 			console.error('Error fetching data:', error);
// 		}
// 	};

// 	fetchData();
// }, []);


const Navbar = () => {
	return (
		<>
			<div id={"navbar"}>
				<div id={"nav-brand"}>
					<img src={"/logo.jpg"} alt={"Logo"} />
				</div>
				<div id={"nav-links"}>
					{
						links.map((link, index) => {
              return (
                <NavLink to={link.path} key={index} title={link.name}>
                  <i className={link.icon}></i>
                </NavLink>
              )
            })
					}
					<a href="http://localhost:3001"><GrUserAdmin /></a>
				</div>
				<div id={"nav-account"}>
					<Link to="/login">
						<img src={"/snap.jpeg"} alt={"Account"} />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
