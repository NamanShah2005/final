import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png"
import founder from "../assets/founder.png"



export const Header = () => {
    const [toshow, settoshow] = useState(false)
    const arrowRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toshow])

    const handleClickOutside = (event) => {
        if (arrowRef.current && !arrowRef.current.contains(event.target)) {
            settoshow(false);
        }
    };
    return (
        <div>
            <div className='navcont'>
                <div className="navcont2">
                    <img src={logo} alt="logo" className='logo' />
                    <div className="heads">
                        <h1 className='headsh1'>GYMKHANA</h1>
                        <h5 className='headsh5'>Admin Panel</h5>
                    </div>
                </div>
                <div className='navcont3'>
                    <img src={founder} alt="founder" className='founder' />
                    <IoIosArrowDown className='arrdown' onClick={() => { settoshow(true) }} />
                </div>
            </div>
        </div>
    )
}
