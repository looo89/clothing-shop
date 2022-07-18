import React from "react";
import MenuButton from "../IU/MenuButton";
import cl from './Header.module.css'
import BasketButton from "../IU/BasketButton";
import SearchButton from "../IU/SearchButton";
import { useSelector } from "react-redux";


import { Link } from "react-router-dom";

function Header(props) {
  
  const totalCount=useSelector(state=> state.clothesReduser.totalCount)

  return (
    <div className={cl.HeaderWrapper} >
        <MenuButton className={cl.MenuButton} onClick={props.toggleMenu}/>
        <div className={cl.HeaderButtonContainer}>
          <SearchButton className={cl.HeaderButton}/>
          <Link className={cl.BasketButtonLink} to="/basket">
            <BasketButton className={cl.HeaderButton}/>
            <div className={cl.count}>{totalCount}</div>
          </Link>
          
        </div>
    </div>
  );
}

export default Header;