import React from "react";
import MenuButton from "../IU/MenuButton";
import cl from './Header.module.css'
import BasketButton from "../IU/BasketButton";
import SearchButton from "../IU/SearchButton";


import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={cl.Header} >
        <MenuButton className={cl.MenuButton} onClick={props.toggleMenu}/>
        <h1>Красивое лого</h1>
        <div className={cl.HeaderButtonContainer}>
          <SearchButton className={cl.HeaderButton}/>
          <Link className={cl.BasketButtonLink} to="/basket">
            <BasketButton className={cl.HeaderButton}/>
          </Link>
          
          
        </div>
    </div>
  );
}

export default Header;