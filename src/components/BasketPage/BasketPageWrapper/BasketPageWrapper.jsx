import React from "react";
import Payment from "../Payment/Payment";
import ItemList from "../ItemList/ItemList"
import cl from './BasketPageWrapper.module.css'


function BasketPageWrapper(props) {

  return (
    <div className={cl.BasketPageWrapper}>
      <ItemList/>
      <Payment/>
    </div>
  );
}

export default BasketPageWrapper;