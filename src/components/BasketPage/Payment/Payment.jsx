import React from "react";
import cl from './Payment.module.css'
import { useSelector } from 'react-redux'



function Payment() {

  const totalCount=useSelector(state=> state.clothesReduser.totalCount)
  const totalPrice=useSelector(state=> state.clothesReduser.totalPrice)
  const getTovar=(totalCount)=>{
    if(totalCount===1) return 'товар'
    if(totalCount>1 && totalCount<5) return 'товара'
    else return 'товаров'
  }
  
  return (
    <div className={cl.Payment}>
       <h2>Всего</h2>
       <div>Всего {totalCount} {getTovar(totalCount)} </div>
       <div>Итого  {totalPrice} рублей</div>
       <div className={cl.PaymentButton}>ОПЛАТИТЬ</div>
    </div>
  );
}

export default Payment;