import React, { useState } from "react";
import './navbar.css'
import logo from  '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";

function Navbar(){

    const [menu ,setMenu] = useState('shop')

    return(
        <>
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo-icon" />
                <p>SHOPWORLD</p>
            </div>
            <div className="nav-menu">
                <li onClick={()=>setMenu('shop')}> <Link to='/'>Shop</Link>  {menu ==='shop' ?<hr/> : <></>} </li>
                <li onClick={()=>setMenu('men')}> <Link to='/mens'>Men</Link> {menu==='men'?<hr />:<></> }</li>
                <li onClick={()=>setMenu('women')}><Link to='/womens'>Women</Link>   {menu==='women'?<hr /> :<></>}</li>
                <li onClick={()=>setMenu('kids')}> <Link to='kids'>Kids </Link>  {menu==='kids'? <hr />:<></> }</li>
            </div>
            <div className="login-cart">
                <Link to='/login'><button>Sign In/Log In</button>
                </Link>
                <Link to='cart'>
                 <img src={cart} alt="carticon" />
                </Link>
               
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>

        </>
       
    )
}

export default Navbar;