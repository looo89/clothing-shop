import React from "react";
import MenuButton from "./IU/MenuButton";
import cl from './../App.module.css'


function Header(props) {
  return (
    <div className={cl.Header} onClick={props.showMenu}>
        <MenuButton className={cl.MenuButton}/>
    </div>
  );
}

export default Header;