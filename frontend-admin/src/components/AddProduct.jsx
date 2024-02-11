import React, { useEffect, useState } from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


export const AddProduct = () => {
    const [Name, setName] = useState("")
    // const [Old_Price, setOld_Price] = useState(null)
    // const [New_Price, setNew_Price] = useState(null)
    const [Society, setSociety] = useState("")
    const [Clubimg, setClubimg] = useState("")

    const SubmitHandler = async () => {
        try {
            console.log(Name);
            console.log(Society);
            console.log(Clubimg);
            const { data } = await axios.post('http://localhost:3005/club/new', {
                Name,
                Society,
                Clubimg
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
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
            <div className="his">
                <div className="mainbox nn">
                    <div className="jkl">
                        <div className="ptitle">
                            <label className='ptitle1'>Club Name</label>
                            <input type="text" placeholder='Enter the club name here' value = {Name} className='ptitle2' onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        {/* <div className="ps2">
                            <div className="pprice">
                                <label className='ptitle1'>Price</label>
                                <input type="number" placeholder='Enter the price here' className='pprice2' value = {Old_Price} onChange={(e) => {setOld_Price(e.target.value)}}/>
                            </div>
                            <div className="offerprice">
                                <label className='ptitle1'>Offer Price</label>
                                <input type="number" placeholder='Enter the offer price here' className='offerprice2' value = {New_Price} onChange={(e) => {setNew_Price(e.target.value)}}/>
                            </div>
                        </div> */}
                        <div className="productcategory">
                            <label className='ptitle1'>Society</label>
                            <select id="category" name="category" className='selection' value = {Society} onChange={(e) => {setSociety(e.target.value)}}>
                                <option value="">Select</option>
                                <option value="Cultural">Cultural</option>
                                <option value="Technical">Technical</option>
                                <option value="Sports">Sports</option>
                                <option value="Research">Research</option>
                                <option value="Literary">Literary</option>
                            </select>
                        </div>
                        <div className="pimg">
                            <label className='ptitle1'>Club image src</label>
                            <input type="text" className='pimg2' placeholder='Enter the source of the image here' value = {Clubimg} onChange={(e) => {setClubimg(e.target.value)}}/>
                        </div>
                        <button className='newbtn1' onClick={SubmitHandler}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
