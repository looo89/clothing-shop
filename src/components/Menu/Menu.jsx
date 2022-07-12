import React from "react";
import cl from './Menu.module.css'

import { Link } from "react-router-dom";


function Menu(props) {

  return (
    <div onMouseLeave={props.toggleMenu}>
     <div className={cl.Menu}>
          <Link className={cl.Link} to="/skirt">Юбки</Link>
          <Link className={cl.Link} to="/dress">Платья</Link>
          <Link className={cl.Link} to="/panama">Панамки</Link>
          <Link className={cl.Link} to="/bags">Сумки</Link>
          
          <Link className={cl.Link} to="/">Главная страница</Link>
        
        </div>
    </div>
  );
}

export default Menu;