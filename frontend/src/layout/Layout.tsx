import './Layout.scss';
import Navbar from "../components/Navbar.tsx";
import {ReactNode} from "react";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

interface Props {
	children: ReactNode;
}

const Layout = ({children}: Props) => {
	return (
		<>
			<div id={"layout"}>
				<div id={"nav-wrapper"}>
					<div id={"nav-container"}>
						<Navbar/>
					</div>
				</div>
				<div id={"content-wrapper"}>
					<div id={"header-wrapper"}>
						<Header />
					</div>
					{children}
					<div id={"footer-wrapper"}>
            <Footer />
          </div>
        </div>
			</div>
		</>
	);
};

export default Layout;
