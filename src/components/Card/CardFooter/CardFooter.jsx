import React, { useState } from "react";
import cl from './CardFooter.module.css'


function CardFooter(props) {
  const [count, setCount]= useState(0)
  const addProduct=()=>{
    setCount(count+1)
  }
  const deleteProduct=()=>{
    if(count===0) {
      setCount(0)
    }else{
      setCount(count-1)
    }  
  }

  return (
    <div className={cl.CardFooter}>
        <div className={cl.FooterOderWrapper}> 
            <div className={cl.FooterOderRow} onClick={addProduct}>
              +
            </div>
            <div className={cl.FooterOderRow}>
              {count}
            </div>
            <div className={cl.FooterOderRow} onClick={deleteProduct}>
              -
            </div>
        </div>
        <div className={cl.FooterBusket}>в корзину</div>
    </div>
  );
}

export default CardFooter;