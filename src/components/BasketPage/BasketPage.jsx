import React from "react";
import cl from './BasketPage.module.css'
import BasketPageWrapper from "./BasketPageWrapper/BasketPageWrapper";


function BasketPage(props) {
  
   

  return (
    <div className={cl.BasketPage}>
      <h1>BasketPage</h1>
      <BasketPageWrapper/>
    </div>
  );
}

export default BasketPage;