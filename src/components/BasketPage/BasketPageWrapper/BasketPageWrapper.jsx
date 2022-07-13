import React from "react";
import Payment from "../Payment/Payment";
import ItemList from "../ItemList/ItemList"
import cl from './BasketPageWrapper.module.css'



import { useSelector } from "react-redux";

function BasketPageWrapper(props) {
  const basket= useSelector(state=> state.clothesReduser.basket)
  return (
    <div className={cl.BasketPageWrapper}>
      <ItemList basket={basket}/>
      <Payment />
    </div>
  );
}

export default BasketPageWrapper;