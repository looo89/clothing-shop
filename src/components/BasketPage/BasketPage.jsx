import React from "react";
import cl from './BasketPage.module.css';
import ItemList from "./ItemList/ItemList";
import Payment from "./Payment/Payment";
import EmptyBasket from "./EmptyBasket/EmptyBasket"


import { useSelector } from "react-redux";

function BasketPage(props) {
  const basket= useSelector(state=> state.clothesReduser.basket)
  const totalCount= useSelector(state=> state.clothesReduser.totalCount)
  return (
    <div >
      <h1>Оформление заказа</h1>
      { totalCount
        ?
          <div className={cl.Basket}>
            <ItemList basket={basket}/>
            <Payment />
          </div>
        :
          <div>
            <EmptyBasket/>
          </div>
          
      }
      
    </div>
  );
}

export default BasketPage;