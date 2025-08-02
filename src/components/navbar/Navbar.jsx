import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './navbar.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const[menu, setMenu] = useState("home");
    const{getTotalCartAmmount} = useContext(StoreContext)

    return (
        <div className='navbar'>
           <Link to={"/"}><img className='logo' src={assets.logo} alt="" /></Link>
            <ul className='navbar-menu'>
                <Link to={"/"} onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
                <a href='#footer' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to={"/cart"}><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
