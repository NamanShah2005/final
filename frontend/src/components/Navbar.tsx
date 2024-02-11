import './Navbar.scss';
import {NavLink} from "react-router-dom";

const links = [
	{name: "Home", path: "/", icon: "bi bi-house-fill"},
	{name: "Generate New Request", path: "/makereq", icon: "bi bi-file-earmark-plus-fill"},
	{name: "Clubs", path: "/clubs", icon: "bi bi-people-fill"},
	{name: "Check Status", path: "/reqstatus", icon: "bi bi-question-circle-fill"},
  {name: "Contact", path: "/contact", icon: "bi bi-telephone-fill"},
]


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
				</div>
				<div id={"nav-account"}>
				<img src={"/snap.jpeg"} alt={"Account"} />
				</div>
			</div>
		</>
	);
};

export default Navbar;
