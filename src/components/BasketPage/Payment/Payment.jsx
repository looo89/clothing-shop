import React from "react";
import cl from './Payment.module.css'
import { useSelector } from 'react-redux'



function Payment() {

  const totalCount=useSelector(state=> state.clothesReduser.totalCount)
  
    
 

  return (
    <div className={cl.Payment}>
       <h2>Всего</h2>
       <div>Count : {totalCount}</div>
       <div>Итого  0 рублей</div>
       <div className={cl.PaymentButton}>ОПЛАТИТЬ</div>
    </div>
  );
}

export default Payment;