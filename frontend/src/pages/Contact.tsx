import './Contact.scss';
import naman from "../assets/naman.png"
import james from "../assets/james.png"
import darshil from "../assets/Darshil.png"
import shubham from "../assets/Shubham.png"

const contacts = [
	{
		img: shubham,
		name: "Shubham Padhi",
		roll: "B23295",
		email: "b232195@students.iitmandi.ac.in",
    phone: "+91 9043674629"
	},
	{
		img: naman,
		name: "Naman Shah",
		roll: "B23218",
		email: "b23218@students.iitmandi.ac.in",
		phone: "+91 9318360305"
	},
	{
		img: james,
		name: "James Davda",
		roll: "B23123",
		email: "b23123@students.iitmandi.ac.in",
		phone: "+91 8849556496"
	},
	{
		img: darshil,
		name: "Darshil Vasani",
		roll: "B23360",
		email: "b23360@students.iitmandi.ac.in",
		phone: "+91 8758692438"
	}
]

const Contact = () => {
	return (
		<>
			<div id={"contact"}>
				<div id={"contact-title"}>
					Contact Us
				</div>
				<div id={"contact-desc"}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</div>
				<div id={"contact-container"}>
					{
						contacts.map((contact, index) => {
							return (
								<div className={"contact-item"} key={index}>
									<div className={"contact-details"}>
										<img className={"contact-img"} src={contact.img} alt={contact.name}/>
										<span className={"contact-name"}>{contact.name}</span>
										<span className={"contact-roll"}>{contact.roll}</span>
									</div>
									<div className={"contact-info"}>
										<div className={"contact-info-item"}>
											<i className={"bi bi-telephone-fill"}></i>
											<span>{contact.phone}</span>
										</div>
										<div className={"contact-info-item"}>
											<i className={"bi bi-envelope-fill"}></i>
											<a href={"mailto:" + contact.email} target="_blank"><span>{contact.email}</span></a>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	);
};

export default Contact;
