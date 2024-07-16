import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p  className='explore-menu-text'>"Order your favorite food here and indulge in a delightful culinary experience from the comfort of your home! With our easy-to-use interface, you can browse a wide variety of dishes from your favorite local restaurants, customize your order to your taste, and have it delivered hot and fresh to your doorstep. Satisfy your cravings with just a few clicks!"</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.img} alt=""/>
                        <p>{item.menu_image}</p>
                        </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default ExploreMenu
