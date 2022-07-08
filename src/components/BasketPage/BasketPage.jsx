import React from "react";
import cl from './BasketPage.module.css'

import { useSelector } from "react-redux";
import ItemProduct from "./ItemProduct";

function BasketPage(props) {
  
  const basket= useSelector(state=> state.clothesReduser.basket) 

  return (
    <div className={cl.BasketPage}>
      <h1>BasketPage</h1>
      {basket.map(b=><ItemProduct key={b.id+ b.name} name={b.name} count={b.count}/>)}
    </div>
  );
}

export default BasketPage;