import React from "react";
import cl from './Payment.module.css'
import { useDispatch } from 'react-redux'
import { getTotalCount } from "../../../store/reducers/clothesReduser";



function Payment() {

  // const dispatch=useDispatch()

  // const getAllCount=()=>{
  //   dispatch(getTotalCount)
 // }

  return (
    <div className={cl.Payment}>
       <h2>Всего</h2>
       <div> </div>
       <div>Итого  0 рублей</div>
       <div className={cl.PaymentButton}>ОПЛАТИТЬ</div>
    </div>
  );
}

export default Payment;