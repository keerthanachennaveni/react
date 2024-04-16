import { LOGO_URL } from "../Utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login")

    const onlineStatus=useOnlineStatus();
      
    return(
        <div className="flex justify-between bg-pink-100 h-[6rem] shadow-md" >
            <div className="">
                <img className="w-[96px]" src="https://marketplace.canva.com/EAFzZd9frfk/1/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo-4rQv_oY-CF8.jpg"></img>

            </div>
            <div className="flex items-center ">
               <ul className="flex">
                <li className="px-4 hover:text-lg hover:text-red-600">Online Status: {onlineStatus?"✅":"🔴"}</li>
                <li className="px-4 hover:text-lg hover:text-red-600" >
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4 hover:text-lg hover:text-red-600">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 hover:text-lg hover:text-red-600">
                    <Link to="/contact">Contact Us</Link>
                </li>
                
                <li className="px-4 hover:text-lg hover:text-red-600">
                    <Link to="/grocery">Grocery</Link>
                </li>
                
                <li className="px-4 hover:text-lg hover:text-red-600">Cart</li>
                <button className="px-4 hover:text-lg hover:text-red-600"
                 onClick={()=>{
                    btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
                 }}
                 >{btnName}</button> {/*** ******/}
               </ul>
            </div>
        </div>
    );
};
export default Header