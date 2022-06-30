import React from "react";
import cl from './Menu.module.css'



function Menu() {

  return (
    <div>
     <div className={cl.Menu}>
          <h1>Меню</h1>
          <h2> Юбки</h2>
          <h2>Платья</h2>
          <h2>Панамки</h2>
        </div>
    </div>
  );
}

export default Menu;