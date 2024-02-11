import React, { useEffect, useState } from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

// export const Home = () => {
//     // // const { data } = await axios.post("http://localhost:3002/newship", {}, {
//     // //             headers: {
//     // //                 "Content-Type": "application/json"
//     // //             },
//     // //             withCredentials: true
//     // //         })
//     // //         console.log(data)
//     // //         // setmessage(data)
//     // //         toast.success(data.message)


//     const [items, setItems] = useState([]);
//     const [justremoved, setjustremoved] = useState(null)
//     const[load, setload] = useState(true);
//     // // useEffect(() => {
//     // //     // Fetch data from your API endpoint
//     // //     fetch('http://localhost:3003/getallitems')
//     // //         .then((response) => response.json())
//     // //         .then((data) => setItems(data))
//     // //         .catch((error) => console.error('Error fetching data:', error));
//     // // }, []);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.post('http://localhost:3005/club/all');
//                 setItems(response.data.allitems);
//                 console.log(response.data.allitems)
//                 setload(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     },[]);


//     const removeHandler = async(item) => {
//         try {
//             let id = item._id
//         console.log(item._id)
//         const {data} = await axios.post('http://localhost:3005/removeItem', {
//             id
//         });
//         setjustremoved(id)
//         toast.success(data.message)
//         } catch (error) {
//             toast.error("Some Error")
//         }
        
//     }

//     return (
//         <div className='home'>
//             <div className="her">
//                 <Link className='btn1' to={"/addproduct"}>
//                     <img src={img1} alt="addpro" className='imgsrc' />
//                     <h3 className='homeh3'>Add Club</h3>
//                 </Link>

//                 <Link className='btn2' to={"/"}>
//                     <img src={img2} alt="prolist" className='imgsrc' />
//                     <h3 className='homeh3'>Club List</h3>
//                 </Link>
//             </div>
//             <div className="his">
//                 <div className="mainbox">
//                     <h1 className='mbh1'>All Clubs List</h1>
//                     <div className='fortable'>
//                         <table className='table'>
//                             <thead className='thead'>
//                                 <tr className='tr'>
//                                     <th className='th'>Club</th>
//                                     <th className='th'>Club Name</th>
//                                     <th className='th'>Society</th>
//                                     <th className='th'>Remove</th>
//                                 </tr>
//                             </thead>
//                             <tbody className='tbody'>
//                             {items.map((item) => (
//                                     <tr key={item._id} className='trs'>
//                                         <td className='td'><img src={item.clubimg} alt="img1" className='product' /></td>
//                                         <td className='td'>{item.clubname}</td>
//                                         <td className='td'>{item.society}</td>
//                                         <td className='td'><button className='remo' onClick={() => {removeHandler(item)}}>Remove</button></td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// // import React, { useEffect, useState } from 'react';
// // import img1 from "../assets/img1.png";
// // import img2 from "../assets/img2.png";
// // import { Link } from 'react-router-dom';

// // export const Home = () => {
// //     const [items, setItems] = useState([]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:3003/getallitems');
// //                 const data = await response.json();
// //                 setItems(data.allitems);
// //                 console.log(data.allitems)
// //             } catch (error) {
// //                 console.error('Error fetching data:', error);
// //             }
// //         };

// //         fetchData();
// //     }, []);

// //     return (
// //         <div className='home'>
// //             <div className="her">
// //                 <button className='btn1'>
// //                     <img src={img1} alt="addpro" className='imgsrc' />
// //                     <Link className='homeh3' to={"/addproduct"}>Add Product</Link>
// //                 </button>

// //                 <button className='btn2'>
// //                     <img src={img2} alt="prolist" className='imgsrc' />
// //                     <Link className='homeh3' to={"/"}>Product List</Link>
// //                 </button>
// //             </div>
// //             <div className="his">
// //                 <div className="mainbox">
// //                     <h1 className='mbh1'>All Products List</h1>
// //                     <div className='fortable'>
// //                         <table className='table'>
// //                             <thead className='thead'>
// //                                 <tr className='tr'>
// //                                     <th className='th'>Products</th>
// //                                     <th className='th'>Title</th>
// //                                     <th className='th'>Old Price</th>
// //                                     <th className='th'>New Price</th>
// //                                     <th className='th'>Category</th>
// //                                     <th className='th'>Remove</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody className='tbody'>
// //                                 {items.map((item) => (
// //                                     <tr key={item._id} className='trs'>
// //                                         <td className='td'><img src={img1} alt="img1" className='product' /></td>
// //                                         <td className='td'>{item.Title}</td>
// //                                         <td className='td'>{item.Old_Price}</td>
// //                                         <td className='td'>{item.New_Price}</td>
// //                                         <td className='td'>{item.Category}</td>
// //                                         <td className='td'><button className='remo'>Remove</button></td>
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

export const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Society, setSociety] = useState("All");

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

    const removeHandler = async (item) => {
        try {
            const id = item._id;
            console.log(item._id);
            const { data } = await axios.post('http://localhost:3005/club/delete', { id });
            toast.success(data.message);
            setItems(items.filter(i => i._id !== id));
        } catch (error) {
            toast.error("Some Error");
        }
    };

    return (
        <div className='home'>

<div className="her">
                 <Link className='btn1' to={"/addproduct"}>
                     <img src={img1} alt="addpro" className='imgsrc' />
                     <h3 className='homeh3'>Add Club</h3>
                 </Link>

                 <Link className='btn2' to={"/"}>
                     <img src={img2} alt="prolist" className='imgsrc' />
                     <h3 className='homeh3'>Club List</h3>
                 </Link>
             </div>
            {/* {loading ? (
                <p>Loading...</p>
            ) : ( */}
                <div className="his">
                    <div className="mainbox">
                        <h1 className='mbh1'>All Clubs List</h1>
                        <div className="sort">
                            <div className="sort1">
                            <select id="category" name="category" className='selection' value = {Society} onChange={(e) => {setSociety(e.target.value)}}>
                                {/* <option value="">Select</option> */}
                                <option value="All">All</option>
                                <option value="Cultural">Cultural</option>
                                <option value="Technical">Technical</option>
                                <option value="Sports">Sports</option>
                                <option value="Research">Research</option>
                                <option value="Literary">Literary</option>
                            </select>
                            </div>
                        </div>
                        <div className='fortable'>
                            <table className='table'>
                                <thead className='thead'>
                                    <tr className='tr'>
                                        <th className='th'>Club</th>
                                        <th className='th'>Club Name</th>
                                        <th className='th'>Society</th>
                                        <th className='th'>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className='tbody'>
                                    {items && items.map((item) => (
                                        (Society === "All" || item.Society == Society)  && (
                                        <tr key={item._id} className='trs'>
                                            <td className='td'><img src={item.Clubimg} alt="img1" className='product' /></td>
                                            <td className='td'>{item.Name}</td>
                                            <td className='td'>{item.Society}</td>
                                            <td className='td'><button className='remo' onClick={() => { removeHandler(item) }}>Remove</button></td>
                                        </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            {/* )} */}
        </div>
    );
};
