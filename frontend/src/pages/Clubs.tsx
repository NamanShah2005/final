import './Clubs.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const Clubs = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const society = queryParams.get('Society');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3005/club/all');
                if (society) {
                    // Filter clubs based on the selected society
                    const filteredClubs = response.data.clubs.filter(club => club.Society === society);
                    setItems(filteredClubs);
                } else {
                    setItems(response.data.clubs);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [society]);

    return (
        <>
            <div id={"clubs-page"}>
                <div id={"clubs"}>
                    <div id={"clubs-heading"}>
                        {society ? `${society} Clubs` : 'All Clubs'}
                    </div>
                    <div id={"heading-desc"}>
                        Lorem ipsum dolor sit amet, consectetur adipis ac turpis et justo sollicitudin.
                    </div>
                    <div id={"clubs-container"}>
                        {
                            items.map((item, index) => (
                                <div key={index} className={"club-card"}>
                                    <img className={"club-img"} src={item.Clubimg} alt={item.Name} />
                                    <div className={"club-name"}>
                                        <Link to={""}>{item.Name}</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clubs;
