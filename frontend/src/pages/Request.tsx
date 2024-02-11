import { useEffect, useState } from 'react';
import './Request.scss';
import axios from 'axios';

interface Item {
	id: number;
	Name: string;
}

interface rew {
	id: number;
	Item_Name: string;
	Qty : number;
	Amount : number;
	Bill_No : number;
	status : string;
	Club : string;
}

const Request = () => {
	
	
		const [items, setItems] = useState<Item[]>([]);
		const [reqs, setreqs] = useState<rew[]>([]);
    const [loading, setLoading] = useState(true);
    const [Society, setSociety] = useState("All");
    const [currClub, setcurrClub] = useState("ECell");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3005/club/all');
                setItems(response.data.clubs);
                console.log(response.data.clubs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

	useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3005/task/all');
                setreqs(response.data.request);
                // console.log(response.data.request);
				
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

	return (
		<>
			<div id="approval-page">
				<div id={"approval-title"}>Approval Status</div>
				<div id={"approval-config"}>Viewing for <span id={"config-club"}>{currClub}</span> (<span id={"config-change"}>Change</span>)</div>
				<div id={"status-container"}>
					<table id={"status-table"}>
						<thead>
						<tr>
							<th>S.no.</th>
							<th>Request</th>
							<th>Price</th>
							<th>Status</th>
						</tr>
						</thead>
						<tbody>
							{reqs.map((item, index) => {
								return (
									item.Club === currClub &&
										<tr key={index}>
											<td>{item.Bill_No}</td>
											<td>{item.Item_Name}</td>
											<td>{item.Qty * item.Amount}</td>
											<td>{item.status}</td>
										</tr>
								)
							})}
							
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Request;
