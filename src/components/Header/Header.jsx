import React from "react";
import MenuButton from "../IU/MenuButton";
import cl from './Header.module.css'
import BasketButton from "../IU/BasketButton";


function Header(props) {
  return (
    <div className={cl.Header} >
        <MenuButton className={cl.MenuButton} onClick={props.showMenu}/>
        <div>
          <BasketButton className={cl.BasketButton}/>
        </div>
    </div>
  );
}

export default Header;