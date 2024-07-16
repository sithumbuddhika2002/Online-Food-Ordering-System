import React ,{ useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const  Navbar = () => {

    const[menu,setMenu] = useState("Home")
  return (
    <div className='navbar'>
      <img src = {assets.search} alt="" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu=="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")}className={menu=="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile")}className={menu=="Mobile"?"active":""}>Mobile</li>
        <li onClick={()=>setMenu("Contact")}className={menu=="Contact"?"active":""}>Contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" />
        <div className="navbar-serach">
            <img src={assets.basket} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
