import React from "react";
import cl from './Payment.module.css'



function Payment() {
  return (
    <div className={cl.Payment}>
       <h2>Всего</h2>
       <div> 1 товар на сумму</div>
       <div>Итого  555 рублей</div>
       <div className={cl.PaymentButton}>ОПЛАТИТЬ</div>
    </div>
  );
}

export default Payment;