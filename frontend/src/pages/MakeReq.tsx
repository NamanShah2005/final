// // // // // import toast from 'react-hot-toast';
// // // // // import './MakeReq.scss';
// // // // // import {useState} from "react";
// // // // // import axios from 'axios';

// // // // // const MakeReq = () => {
// // // // // 	const [data, setData] = useState([{
// // // // // 		sno: 1,
// // // // // 		item: '',
// // // // // 		price: 0,
// // // // // 		quantity: 0
// // // // // 	}]);
	
// // // // // 	const addRow = () => {
// // // // // 		setData([...data, {
// // // // // 			sno: data.length + 1,
// // // // // 			item: '',
// // // // // 			price: 0,
// // // // // 			quantity: 0
// // // // // 		}])
// // // // // 	}
	
// // // // // 	const deleteRow = (index: number) => {
// // // // // 		setData(data.filter((_, i) => i!== index));
// // // // // 	}

// // // // // 	const [Club, setClub] = useState("Music");
// // // // // 	const [Item_Name, setItem_Name] = useState("");
// // // // // 	const [Name_Of_Supplier, setName_Of_Supplier] = useState("");
// // // // // 	const [Description_of_item, setDescription_of_item] = useState("");
// // // // // 	const [Qty, setQty] = useState(0);
// // // // // 	const [Amount, setAmount] = useState(0);

// // // // // 	const SubmitHandler = async (event) => {
// // // // // 		event.preventDefault()
// // // // //         try {
// // // // //             const { data } = await axios.post('http://localhost:3005/task/new', {
// // // // //                 Club, Item_Name, Name_Of_Supplier, Description_of_item, Qty, Amount
// // // // //             }, {
// // // // //                 headers: {
// // // // //                     'Content-Type': 'application/json'
// // // // //                 }
// // // // //             });
            
// // // // //             if (data.success) {
// // // // //                 toast.success(data.message);
// // // // //             } else {
// // // // //                 toast.error(data.message);
// // // // //             }
// // // // //         } catch (error) {
// // // // //             toast.error("Some Error");
// // // // //         }
// // // // //     };


// // // // // 	return (
// // // // // 		<>
// // // // // 			<div id={"req-make"}>
// // // // // 				<div id={"req-title"}>Generate A Request</div>
// // // // // 				<form id={"req-make-form"} action={""} onSubmit={SubmitHandler}>
// // // // // 					<div id={"name-section"}>
// // // // // 						<label htmlFor={"input-name"}>Name </label>
// // // // // 						<input id={"input-name"} type={"name"} placeholder={"Enter name..."} required value = {Name_Of_Supplier} onChange={(e) => {setName_Of_Supplier(e.target.value)}}/>
// // // // // 					</div>
// // // // // 					<div id="club-section">
// // // // // 						<label htmlFor={"input-club"}>Club </label>
// // // // // 						<input id={"input-club"} list={"clubs-list"} placeholder={"Enter club..."} required/>
// // // // // 						<datalist id={"clubs-list"}>
// // // // // 							<option value={"Club 1"}/>
// // // // //               <option value={"Club 2"}/>
// // // // //               <option value={"Club 3"}/>
// // // // //               <option value={"Club 4"}/>
// // // // //               <option value={"Club 5"}/>
// // // // // 						</datalist>
// // // // // 					</div>
// // // // // 					<div id={"items-section"}>
// // // // // 						<table id={"items-table"}>
// // // // // 							<thead>
// // // // //                 <tr>
// // // // // 	                <th>S.no</th>
// // // // //                   <th>Item</th>
// // // // //                   <th>Price</th>
// // // // // 	                <th>Quantity</th>
// // // // // 	                <th>
// // // // // 		                <span onClick={addRow}>Add</span>
// // // // // 	                </th>
// // // // //                 </tr>
// // // // //               </thead>
// // // // // 							<tbody>
// // // // // 								{
// // // // // 									data.map((item, index) => {
// // // // // 										return (
// // // // // 											<tr key={index}>
// // // // //                         <td>{item.sno}</td>
// // // // //                         <td><input type={"text"} placeholder={"Enter item..."} value = {Item_Name} onChange={(e) => {setItem_Name(e.target.value)}}/></td>
// // // // //                         <td><input type="number" value={Amount} onChange={(e) => { setAmount(parseFloat(e.target.value)) }}/></td>

// // // // //                         <td><input type={"number"} value={Qty} onChange={(e) => { setQty(parseFloat(e.target.value)) }}/></td>
// // // // //                         <td><span onClick={() => deleteRow(index)}>Delete</span></td>
// // // // //                       </tr>
// // // // // 										)
// // // // // 									})
// // // // // 								}
// // // // // 							</tbody>
// // // // // 						</table>
// // // // // 					</div>
// // // // // 					<div id={"purpose-section"}>
// // // // // 						<label htmlFor={"purpose-input"}>Purpose </label>
// // // // // 						<textarea id={"purpose-input"} value = {Description_of_item} onChange={(e) => {setDescription_of_item(e.target.value)}}>
						
// // // // // 						</textarea>
// // // // // 					</div>
// // // // // 					<div id={"summary-section"}>
// // // // // 						<div id={"sum-price"}>Total Price: <span>₹300</span></div>
// // // // // 						<div id={"req-date"}>Date: <span>32 Feb 2010</span></div>
// // // // // 					</div>
// // // // // 					<input type={"submit"} value={"Submit"}/>
// // // // // 				</form>
// // // // // 				<div id={"req-guidelines"}>
// // // // // 					<div id={"req-guidelines-title"}>Request Guidelines</div>
// // // // //           <div id={"req-guidelines-desc"}>
// // // // //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// // // // //           </div>
// // // // // 				</div>
// // // // // 			</div>
// // // // // 		</>
// // // // // 	);
// // // // // };

// // // // // export default MakeReq;

// // // // import axios from 'axios';
// // // // import './MakeReq.scss';
// // // // import { useState } from "react";
// // // // import toast from 'react-hot-toast';

// // // // const MakeReq = () => {
// // // //     const [requests, setRequests] = useState([
// // // //         {
// // // //             sno: 1,
// // // //             item: '',
// // // //             price: 0,
// // // //             quantity: 0
// // // //         }
// // // //     ]);

// // // //     const [Name_Of_Supplier, setName_Of_Supplier] = useState("");
// // // //     const [Club, setClub] = useState("");
// // // //     const [Description_of_item, setDescription_of_item] = useState("");

// // // //     const addRow = () => {
// // // //         setRequests(prevRequests => [
// // // //             ...prevRequests,
// // // //             {
// // // //                 sno: prevRequests.length + 1,
// // // //                 item: '',
// // // //                 price: 0,
// // // //                 quantity: 0
// // // //             }
// // // //         ]);
// // // //     };

// // // //     const deleteRow = (index) => {
// // // //         setRequests(prevRequests => prevRequests.filter((_, i) => i !== index));
// // // //     };

// // // //     const handleSubmit = async (event) => {
// // // //         event.preventDefault();
// // // //         try {
// // // //             // Iterate over each request and send it to the server
// // // //             await Promise.all(requests.map(async (request) => {
// // // //                 const { data: responseData } = await axios.post('http://localhost:3005/task/new', {
// // // //                     Name_Of_Supplier,
// // // //                     Club,
// // // //                     Description_of_item,
// // // //                     item: request.item,
// // // //                     price: request.price,
// // // //                     quantity: request.quantity
// // // //                 });
// // // //                 if (responseData.success) {
// // // //                     toast.success(responseData.message);
// // // //                 } else {
// // // //                     toast.error(responseData.message);
// // // //                 }
// // // //             }));
// // // //         } catch (error) {
// // // //             console.error("Error submitting requests:", error);
// // // //             toast.error("Error submitting requests. Please try again later.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <>
// // // //             <div id="req-make">
// // // //                 <div id="req-title">Generate A Request</div>
// // // //                 <form id="req-make-form" onSubmit={handleSubmit}>
// // // //                     <div id="name-section">
// // // //                         <label htmlFor="input-name">Name </label>
// // // //                         <input id="input-name" type="name" placeholder="Enter name..." required value={Name_Of_Supplier} onChange={(e) => setName_Of_Supplier(e.target.value)} />
// // // //                     </div>
// // // //                     <div id="club-section">
// // // //                         <label htmlFor="input-club">Club </label>
// // // //                         <input id="input-club" type="text" placeholder="Enter club..." required value={Club} onChange={(e) => setClub(e.target.value)} />
// // // //                     </div>
                    
// // // //                     <div id="items-section">
// // // //                         <table id="items-table">
// // // //                             <thead>
// // // //                                 <tr>
// // // //                                     <th>S.no</th>
// // // //                                     <th>Item</th>
// // // //                                     <th>Price</th>
// // // //                                     <th>Quantity</th>
// // // //                                     <th>
// // // //                                         <span onClick={addRow}>Add</span>
// // // //                                     </th>
// // // //                                 </tr>
// // // //                             </thead>
// // // //                             <tbody>
// // // //                                 {requests.map((request, index) => (
// // // //                                     <tr key={index}>
// // // //                                         <td>{request.sno}</td>
// // // //                                         <td><input type="text" placeholder="Enter item..." value={request.item} onChange={(e) => {
// // // //                                             const updatedRequests = [...requests];
// // // //                                             updatedRequests[index].item = e.target.value;
// // // //                                             setRequests(updatedRequests);
// // // //                                         }} /></td>
// // // //                                         <td><input type="number" value={request.price} onChange={(e) => {
// // // //                                             const updatedRequests = [...requests];
// // // //                                             updatedRequests[index].price = parseFloat(e.target.value);
// // // //                                             setRequests(updatedRequests);
// // // //                                         }} /></td>
// // // //                                         <td><input type="number" value={request.quantity} onChange={(e) => {
// // // //                                             const updatedRequests = [...requests];
// // // //                                             updatedRequests[index].quantity = parseFloat(e.target.value);
// // // //                                             setRequests(updatedRequests);
// // // //                                         }} /></td>
// // // //                                         <td><span onClick={() => deleteRow(index)}>Delete</span></td>
// // // //                                     </tr>
// // // //                                 ))}
// // // //                             </tbody>
// // // //                         </table>
// // // //                     </div>
// // // //                     <input type="submit" value="Submit" />
// // // //                 </form>
// // // //                 <div id="req-guidelines">
// // // //                     <div id="req-guidelines-title">Request Guidelines</div>
// // // //                     <div id="req-guidelines-desc">
// // // //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </>
// // // //     );
// // // // };

// // // // export default MakeReq;


// // // import toast from 'react-hot-toast';
// // // import './MakeReq.scss';
// // // import { useState } from "react";
// // // import axios from 'axios';

// // // const MakeReq = () => {
// // //     const [commonData, setCommonData] = useState({
// // //         Club: "Music",
// // //         Name_Of_Supplier: "",
// // //         Description_of_item: ""
// // //     });

// // //     const [data, setData] = useState([{
// // //         sno: 1,
// // //         item: '',
// // //         price: 0,
// // //         quantity: 0
// // //     }]);

// // //     const addRow = () => {
// // //         setData([...data, {
// // //             sno: data.length + 1,
// // //             item: '',
// // //             price: 0,
// // //             quantity: 0
// // //         }])
// // //     }

// // //     const deleteRow = (index: number) => {
// // //         setData(data.filter((_, i) => i !== index));
// // //     }

// // //     const SubmitHandler = async (event) => {
// // //         event.preventDefault();
// // //         try {
// // //             // Iterate over each item in the data array
// // //             for (const item of data) {
// // //                 const { data } = await axios.post('http://localhost:3005/task/new', {
// // //                     ...commonData, // Add common data to each request
// // //                     Item_Name: item.item,
// // //                     Qty: item.quantity,
// // //                     Amount: item.price
// // //                 }, {
// // //                     headers: {
// // //                         'Content-Type': 'application/json'
// // //                     }
// // //                 });

// // //                 if (data.success) {
// // //                     toast.success(data.message);
// // //                 } else {
// // //                     toast.error(data.message);
// // //                 }
// // //             }
// // //         } catch (error) {
// // //             toast.error("Some Error");
// // //         }
// // //     };

// // //     return (
// // //         <>
// // //             <div id={"req-make"}>
// // //                 <div id={"req-title"}>Generate A Request</div>
// // //                 <form id={"req-make-form"} action={""} onSubmit={SubmitHandler}>
// // //                     <div id={"name-section"}>
// // //                         <label htmlFor={"input-name"}>Name </label>
// // //                         <input id={"input-name"} type={"name"} placeholder={"Enter name..."} required value={commonData.Name_Of_Supplier} onChange={(e) => { setCommonData({...commonData, Name_Of_Supplier: e.target.value}) }} />
// // //                     </div>
// // //                     <div id="club-section">
// // //                         <label htmlFor={"input-club"}>Club </label>
// // //                         <input id={"input-club"} list={"clubs-list"} placeholder={"Enter club..."} required />
// // //                         <datalist id={"clubs-list"}>
// // //                             <option value={"Club 1"} />
// // //                             <option value={"Club 2"} />
// // //                             <option value={"Club 3"} />
// // //                             <option value={"Club 4"} />
// // //                             <option value={"Club 5"} />
// // //                         </datalist>
// // //                     </div>
// // //                     <div id={"items-section"}>
// // //                         <table id={"items-table"}>
// // //                             <thead>
// // //                                 <tr>
// // //                                     <th>S.no</th>
// // //                                     <th>Item</th>
// // //                                     <th>Price</th>
// // //                                     <th>Quantity</th>
// // //                                     <th>
// // //                                         <span onClick={addRow}>Add</span>
// // //                                     </th>
// // //                                 </tr>
// // //                             </thead>
// // //                             <tbody>
// // //                                 {
// // //                                     data.map((item, index) => {
// // //                                         return (
// // //                                             <tr key={index}>
// // //                                                 <td>{item.sno}</td>
// // //                                                 <td><input type={"text"} placeholder={"Enter item..."} value={item.item} onChange={(e) => { item.item = e.target.value; setData([...data]) }} /></td>
// // //                                                 <td><input type="number" value={item.price} onChange={(e) => { item.price = parseFloat(e.target.value); setData([...data]) }} /></td>
// // //                                                 <td><input type={"number"} value={item.quantity} onChange={(e) => { item.quantity = parseFloat(e.target.value); setData([...data]) }} /></td>
// // //                                                 <td><span onClick={() => deleteRow(index)}>Delete</span></td>
// // //                                             </tr>
// // //                                         )
// // //                                     })
// // //                                 }
// // //                             </tbody>
// // //                         </table>
// // //                     </div>
// // //                     <div id={"purpose-section"}>
// // //                         <label htmlFor={"purpose-input"}>Purpose </label>
// // //                         <textarea id={"purpose-input"} value={commonData.Description_of_item} onChange={(e) => { setCommonData({...commonData, Description_of_item: e.target.value}) }}></textarea>
// // //                     </div>
// // //                     <div id={"summary-section"}>
// // //                         <div id={"sum-price"}>Total Price: <span>₹300</span></div>
// // //                         <div id={"req-date"}>Date: <span>32 Feb 2010</span></div>
// // //                     </div>
// // //                     <input type={"submit"} value={"Submit"} />
// // //                 </form>
// // //                 <div id={"req-guidelines"}>
// // //                     <div id={"req-guidelines-title"}>Request Guidelines</div>
// // //                     <div id={"req-guidelines-desc"}>
// // //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default MakeReq;

// // import toast from 'react-hot-toast';
// // import './MakeReq.scss';
// // import { useState, useEffect } from "react";
// // import axios from 'axios';

// // const MakeReq = () => {
// //     const [commonData, setCommonData] = useState({
// //         Club: "Music",
// //         Name_Of_Supplier: "",
// //         Description_of_item: ""
// //     });

// //     const [data, setData] = useState([{
// //         sno: 1,
// //         item: '',
// //         price: 0,
// //         quantity: 0
// //     }]);

// //     const [totalPrice, setTotalPrice] = useState(0);

// //     // Function to calculate the total price
// //     const calculateTotalPrice = () => {
// //         let total = 0;
// //         data.forEach(item => {
// //             total += item.price * item.quantity;
// //         });
// //         return total;
// //     };

// //     useEffect(() => {
// //         // Update total price whenever data changes
// //         setTotalPrice(calculateTotalPrice());
// //     }, [data]);

// //     const addRow = () => {
// //         setData([...data, {
// //             sno: data.length + 1,
// //             item: '',
// //             price: 0,
// //             quantity: 0
// //         }])
// //     }

// //     const deleteRow = (index: number) => {
// //         setData(data.filter((_, i) => i !== index));
// //     }

// //     const SubmitHandler = async (event) => {
// //         event.preventDefault();
// //         try {
// //             // Iterate over each item in the data array
// //             for (const item of data) {
// //                 const { data } = await axios.post('http://localhost:3005/task/new', {
// //                     ...commonData, // Add common data to each request
// //                     Item_Name: item.item,
// //                     Qty: item.quantity,
// //                     Amount: item.price
// //                 }, {
// //                     headers: {
// //                         'Content-Type': 'application/json'
// //                     }
// //                 });

// //                 if (data.success) {
// //                     toast.success(data.message);
// //                 } else {
// //                     toast.error(data.message);
// //                 }
// //             }
// //         } catch (error) {
// //             toast.error("Some Error");
// //         }
// //     };

// //     return (
// //         <>
// //             <div id={"req-make"}>
// //                 <div id={"req-title"}>Generate A Request</div>
// //                 <form id={"req-make-form"} action={""} onSubmit={SubmitHandler}>
// //                     <div id={"name-section"}>
// //                         <label htmlFor={"input-name"}>Name </label>
// //                         <input id={"input-name"} type={"name"} placeholder={"Enter name..."} required value={commonData.Name_Of_Supplier} onChange={(e) => { setCommonData({ ...commonData, Name_Of_Supplier: e.target.value }) }} />
// //                     </div>
// //                     <div id="club-section">
// //                         <label htmlFor={"input-club"}>Club </label>
// //                         <input id={"input-club"} list={"clubs-list"} placeholder={"Enter club..."} required />
// //                         <datalist id={"clubs-list"}>
// //                             <option value={"Club 1"} />
// //                             <option value={"Club 2"} />
// //                             <option value={"Club 3"} />
// //                             <option value={"Club 4"} />
// //                             <option value={"Club 5"} />
// //                         </datalist>
// //                     </div>
// //                     <div id={"items-section"}>
// //                         <table id={"items-table"}>
// //                             <thead>
// //                                 <tr>
// //                                     <th>S.no</th>
// //                                     <th>Item</th>
// //                                     <th>Price</th>
// //                                     <th>Quantity</th>
// //                                     <th>
// //                                         <span onClick={addRow}>Add</span>
// //                                     </th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 {
// //                                     data.map((item, index) => {
// //                                         return (
// //                                             <tr key={index}>
// //                                                 <td>{item.sno}</td>
// //                                                 <td><input type={"text"} placeholder={"Enter item..."} value={item.item} onChange={(e) => { item.item = e.target.value; setData([...data]) }} /></td>
// //                                                 <td><input type="number" value={item.price} onChange={(e) => { item.price = parseFloat(e.target.value); setData([...data]) }} /></td>
// //                                                 <td><input type={"number"} value={item.quantity} onChange={(e) => { item.quantity = parseFloat(e.target.value); setData([...data]) }} /></td>
// //                                                 <td><span onClick={() => deleteRow(index)}>Delete</span></td>
// //                                             </tr>
// //                                         )
// //                                     })
// //                                 }
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                     <div id={"purpose-section"}>
// //                         <label htmlFor={"purpose-input"}>Purpose </label>
// //                         <textarea id={"purpose-input"} value={commonData.Description_of_item} onChange={(e) => { setCommonData({ ...commonData, Description_of_item: e.target.value }) }}></textarea>
// //                     </div>
// //                     <div id={"summary-section"}>
// //                         <div id={"sum-price"}>Total Price: <span>₹{totalPrice}</span></div>
// //                         <div id={"req-date"}>Date: <span>32 Feb 2010</span></div>
// //                     </div>
// //                     <input type={"submit"} value={"Submit"} />
// //                 </form>
// //                 <div id={"req-guidelines"}>
// //                     <div id={"req-guidelines-title"}>Request Guidelines</div>
// //                     <div id={"req-guidelines-desc"}>
// //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default MakeReq;


// import toast from 'react-hot-toast';
// import './MakeReq.scss';
// import { useState, useEffect } from "react";
// import axios from 'axios';

// const MakeReq = () => {
//     const [commonData, setCommonData] = useState({
//         Club: "Music",
//         Name_Of_Supplier: "",
//         Description_of_item: ""
//     });

//     const [data, setData] = useState([{
//         sno: 1,
//         item: '',
//         price: 0,
//         quantity: 0
//     }]);

//     const [totalPrice, setTotalPrice] = useState(0);
//     const [toastDisplayed, setToastDisplayed] = useState(false);

//     const addRow = () => {
//         setData([...data, {
//             sno: data.length + 1,
//             item: '',
//             price: 0,
//             quantity: 0
//         }])
//     }

//     const deleteRow = (index: number) => {
//         setData(data.filter((_, i) => i !== index));
//     }

//     const SubmitHandler = async (event) => {
//         event.preventDefault();
//         try {
//             // Iterate over each item in the data array
//             for (const item of data) {
//                 const { data } = await axios.post('http://localhost:3005/task/new', {
//                     ...commonData, // Add common data to each request
//                     Item_Name: item.item,
//                     Qty: item.quantity,
//                     Amount: item.price
//                 }, {
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });

//                 if (data.success && !toastDisplayed) {
//                     toast.success(data.message);
//                     setToastDisplayed(true); // Set toastDisplayed to true after displaying the toast
//                 } else if (!toastDisplayed) {
//                     toast.error(data.message);
//                     setToastDisplayed(true); // Set toastDisplayed to true after displaying the toast
//                 }
//             }
//         } catch (error) {
//             toast.error("Some Error");
//         }
//     };

//     // Function to calculate the total price
//     const calculateTotalPrice = () => {
//         let total = 0;
//         data.forEach(item => {
//             total += item.price * item.quantity;
//         });
//         return total;
//     };

//     useEffect(() => {
//         // Update total price whenever data changes
//         setTotalPrice(calculateTotalPrice());
//     }, [data]);

//     // Function to get current date in IST
//     const getCurrentDateIST = () => {
//         const date = new Date();
//         const ISTOffset = 330; // IST is UTC +5:30
//         const ISTTime = new Date(date.getTime() + (ISTOffset * 60000)); // Convert milliseconds to minutes
//         return ISTTime.toLocaleString(); // Return IST time in local format
//     };

//     return (
//         <>
//             <div id={"req-make"}>
//                 <div id={"req-title"}>Generate A Request</div>
//                 <form id={"req-make-form"} action={""} onSubmit={SubmitHandler}>
//                     <div id={"name-section"}>
//                         <label htmlFor={"input-name"}>Name </label>
//                         <input id={"input-name"} type={"name"} placeholder={"Enter name..."} required value={commonData.Name_Of_Supplier} onChange={(e) => { setCommonData({ ...commonData, Name_Of_Supplier: e.target.value }) }} />
//                     </div>
//                     <div id="club-section">
//                         <label htmlFor={"input-club"}>Club </label>
//                         <input id={"input-club"} list={"clubs-list"} placeholder={"Enter club..."} required />
//                         <datalist id={"clubs-list"}>
//                             <option value={"Club 1"} />
//                             <option value={"Club 2"} />
//                             <option value={"Club 3"} />
//                             <option value={"Club 4"} />
//                             <option value={"Club 5"} />
//                         </datalist>
//                     </div>
//                     <div id={"items-section"}>
//                         <table id={"items-table"}>
//                             <thead>
//                                 <tr>
//                                     <th>S.no</th>
//                                     <th>Item</th>
//                                     <th>Price</th>
//                                     <th>Quantity</th>
//                                     <th>
//                                         <span onClick={addRow}>Add</span>
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     data.map((item, index) => {
//                                         return (
//                                             <tr key={index}>
//                                                 <td>{item.sno}</td>
//                                                 <td><input type={"text"} placeholder={"Enter item..."} value={item.item} onChange={(e) => { item.item = e.target.value; setData([...data]) }} /></td>
//                                                 <td><input type="number" value={item.price} onChange={(e) => { item.price = parseFloat(e.target.value); setData([...data]) }} /></td>
//                                                 <td><input type={"number"} value={item.quantity} onChange={(e) => { item.quantity = parseFloat(e.target.value); setData([...data]) }} /></td>
//                                                 <td><span onClick={() => deleteRow(index)}>Delete</span></td>
//                                             </tr>
//                                         )
//                                     })
//                                 }
//                             </tbody>
//                         </table>
//                     </div>
//                     <div id={"purpose-section"}>
//                         <label htmlFor={"purpose-input"}>Purpose </label>
//                         <textarea id={"purpose-input"} value={commonData.Description_of_item} onChange={(e) => { setCommonData({ ...commonData, Description_of_item: e.target.value }) }}></textarea>
//                     </div>
//                     <div id={"summary-section"}>
//                         <div id={"sum-price"}>Total Price: <span>₹{totalPrice}</span></div>
//                         <div id={"req-date"}>Date: <span>{getCurrentDateIST()}</span></div>
//                     </div>
//                     <input type={"submit"} value={"Submit"} />
//                 </form>
//                 <div id={"req-guidelines"}>
//                     <div id={"req-guidelines-title"}>Request Guidelines</div>
//                     <div id={"req-guidelines-desc"}>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MakeReq;


import toast from 'react-hot-toast';
import './MakeReq.scss';
import { useState, useEffect } from "react";
import axios from 'axios';

const MakeReq = () => {
    const [commonData, setCommonData] = useState({
        Club: "Music",
        Name_Of_Supplier: "",
        Description_of_item: ""
    });

    const [data, setData] = useState([{
        sno: 1,
        item: '',
        price: 0,
        quantity: 0
    }]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [toastDisplayed, setToastDisplayed] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    const addRow = () => {
        setData([...data, {
            sno: data.length + 1,
            item: '',
            price: 0,
            quantity: 0
        }])
    }

    const deleteRow = (index: number) => {
        setData(data.filter((_, i) => i !== index));
    }

    const SubmitHandler = async (event) => {
        event.preventDefault();
        try {
            // Iterate over each item in the data array
            for (const item of data) {
                const { data } = await axios.post('http://localhost:3005/task/new', {
                    ...commonData, // Add common data to each request
                    Item_Name: item.item,
                    Qty: item.quantity,
                    Amount: item.price
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (data.success && !toastDisplayed) {
                    toast.success(data.message);
                    setToastDisplayed(true); // Set toastDisplayed to true after displaying the toast
                } else if (!toastDisplayed) {
                    toast.error(data.message);
                    setToastDisplayed(true); // Set toastDisplayed to true after displaying the toast
                }
            }
        } catch (error) {
            toast.error("Some Error");
        }
    };

    // Function to calculate the total price
    const calculateTotalPrice = () => {
        let total = 0;
        data.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    useEffect(() => {
        // Update total price whenever data changes
        setTotalPrice(calculateTotalPrice());

        // Update date every second
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Clean up the interval
        return () => clearInterval(intervalId);
    }, [data]);

    return (
        <>
            <div id={"req-make"}>
                <div id={"req-title"}>Generate A Request</div>
                <form id={"req-make-form"} action={""} onSubmit={SubmitHandler}>
                    <div id={"name-section"}>
                        <label htmlFor={"input-name"}>Name </label>
                        <input id={"input-name"} type={"name"} placeholder={"Enter name..."} required value={commonData.Name_Of_Supplier} onChange={(e) => { setCommonData({ ...commonData, Name_Of_Supplier: e.target.value }) }} />
                    </div>
                    <div id="club-section">
                        <label htmlFor={"input-club"}>Club </label>
                        <input id={"input-club"} list={"clubs-list"} placeholder={"Enter club..."} required />
                        <datalist id={"clubs-list"}>
                            <option value={"Club 1"} />
                            <option value={"Club 2"} />
                            <option value={"Club 3"} />
                            <option value={"Club 4"} />
                            <option value={"Club 5"} />
                        </datalist>
                    </div>
                    <div id={"items-section"}>
                        <table id={"items-table"}>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>
                                        <span onClick={addRow}>Add</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.sno}</td>
                                                <td><input type={"text"} placeholder={"Enter item..."} value={item.item} onChange={(e) => { item.item = e.target.value; setData([...data]) }} /></td>
                                                <td><input type="number" value={item.price} onChange={(e) => { item.price = parseFloat(e.target.value); setData([...data]) }} /></td>
                                                <td><input type={"number"} value={item.quantity} onChange={(e) => { item.quantity = parseFloat(e.target.value); setData([...data]) }} /></td>
                                                <td><span onClick={() => deleteRow(index)}>Delete</span></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div id={"purpose-section"}>
                        <label htmlFor={"purpose-input"}>Purpose </label>
                        <textarea id={"purpose-input"} value={commonData.Description_of_item} onChange={(e) => { setCommonData({ ...commonData, Description_of_item: e.target.value }) }}></textarea>
                    </div>
                    <div id={"summary-section"}>
                        <div id={"sum-price"}>Total Price: <span>₹{totalPrice}</span></div>
                        <div id={"req-date"}>Date: <span>{currentDate.toLocaleString()}</span></div>
                    </div>
                    <input type={"submit"} value={"Submit"} />
                </form>
                <div id={"req-guidelines"}>
                    <div id={"req-guidelines-title"}>Request Guidelines</div>
                    <div id={"req-guidelines-desc"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeReq;
