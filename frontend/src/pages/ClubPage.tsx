import './ClubPage.scss';
import data from '../../public/data/clubs.json';
import NotFound from "./NotFound.tsx";

interface Props {
	club: string;
}

const ClubPage = ({club}: Props) => {
	
	const clubData = data.find(p => p.id === club);
	if (!clubData) return <NotFound />;
	
	return (
		<>
			<div className="club-page">
				<div className={"club-title"}>
					<a href={clubData.link}>{clubData.name}</a>
				</div>
				<div className={"club-description"}>
					{clubData.description}
				</div>
				<div className={"club-pic"}>
					<img src={clubData.img} alt={clubData.name} />
				</div>
				<div className={"club-status-panel"}>
					<a id={"req-send"} href={"/makereq"}>Send request</a>
					<a id={"req-status"} href={"/reqstatus"}>Check status</a>
				</div>
			</div>
		</>
	);
};

export default ClubPage;
