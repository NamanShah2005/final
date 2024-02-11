import './Footer.scss';

const Footer = () => {
	return (
		<>
			<footer>
				<div id="footer-content">
					<div id="footer-left">
						<img id="footer-logo" src='/iitmandi.jpg' alt={"Logo"}/>
							<span id="footer-title">Student&nbsp;Gymkhana&reg;</span>
							<br/>
								<div id="footer-address">
									Indian Institute of Technology, Mandi <br/>
									Parashar Road, Tehsil Sadar, Near Kataula <br/>
									Kamand, Himachal Pradesh 175005 <br/>
									<a href="https://wiki.iitmandi.co.in/index.php/Student_Gymkhana_IIT_Mandi" target="_blank">Go to Wiki link</a>
								</div>
					</div>
					<div id="footer-right">
						<div id="footer-desc-title">about the team</div>
						<div id="footer-desc">
							we are a bunch of unemployed individuals who know a bit of everything.
						</div>
						<div id="footer-links">
							<a target="_blank" title="Mail" href="mailto:b23295@students.iitmandi.ac.in"><i
								className="bi bi-envelope"></i></a>
							<a target="_blank" title="GitHub" href="https://github.com/Voldemort271"><i
								className="bi bi-github"></i></a>
							<a target="_blank" title="Instagram" href="https://www.instagram.com/shubum_27/"><i
								className="bi bi-instagram"></i></a>
						</div>
					</div>
				</div>
				<div id="footer-details">
					Copyright &copy;2024 Team CodeKnights, IIT Mandi.
					<br/> Website last updated today <br/>
						<a onClick={() => window.scroll(0, 0)}>Back to top</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
