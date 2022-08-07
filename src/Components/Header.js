import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react'
import "./header.css";
import items from './NavItems';

const Header = () => {

    const[toggle,setToggle] = useState(false);
    const[search,setSearch] = useState({});

    const Bars = () =>{
        setToggle(true);
        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');

        if(bars_icon.style.display = 'flex'){
            cross_icon.style.display = 'flex';
            bars_icon.style.display = 'none';
        }else{
            bars_icon.style.display = 'flex';
        }
    }

    const Cross = () =>{
        setToggle(false);
        const bars_icon = document.getElementById('bars');
        const cross_icon = document.getElementById('cross');
        

        if(cross_icon.style.display = 'flex'){
            cross_icon.style.display = 'none';
            bars_icon.style.display = 'flex';
        }else{
            cross_icon.style.display = 'flex';
        }
    }


  return (
  <nav className='container'>
    <img src = "images/logo.svg" alt='' className='logoimg' />
    
    <div className={ toggle ? 'NavMenu active' : 'NavMenu'}>
            {items.map((currentNavItems)=>{
             const {id,src,span,idName} = currentNavItems;
                return(
                    <a key={id}>
                    <img src={src} alt='' />
                    <span >{span}</span>
                </a>
                )
            })}
              <div className={search ? 'search-Bar active' : 'search-Bar'}>
            <input type="text" palceholder="search..." id="search" className="searchInput" size={30} />

        </div>
        <div className='userImageDiv'>
        <img src='https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Radha-Krishna-Perfect-Love-Couple-Wallpaper-for-Mobile.jpg' className='userImage' />
        </div>
      
    </div>

    <div className='menu-btns'>
        <i id='bars' onClick={()=>Bars()} className='bars-icon'><FontAwesomeIcon icon={faBars} /></i>
        <i id='cross' onClick={()=>Cross()} className='cross-icon'><FontAwesomeIcon icon={faTimes} /></i>

    </div>
  </nav>
  )
}

export default Header;