import React, { useState } from "react";
import cl from './CardFooter.module.css'

import { addInBasketAction } from "../../../store/reducers/clothesReduser";
import { useDispatch } from "react-redux";


function CardFooter({id, categoryId,name, price, img}) {
  
  const dispatch=useDispatch()
  const [count, setCount]= useState(0)
  const [clicked, setClicked] = useState(false)


  const addCount=()=>{
    setCount(count+1)
  }
  const deleteCount=()=>{
    if(count===0) {
      setCount(0)
    }else{
      setCount(count-1)
    }  
  }
  function handleClick() {
    setClicked(!clicked);
}
  
  const addProductInBasket=()=>{
    if(count>0){
      dispatch(addInBasketAction({id, categoryId, name, price, count}))
      handleClick()
    }
  }

  

  return (
    <div className={cl.CardFooter}>
        <div className={cl.FooterOderWrapper}> 
            <div className={cl.FooterOderRow} onClick={addCount}>
              +
            </div>
            <div className={cl.FooterOderRow}>
              {count}
            </div>
            <div className={cl.FooterOderRow} onClick={deleteCount}>
              -
            </div>
        </div>
        
        <div className={cl.FooterBusket} onClick={addProductInBasket}>     
          {clicked 
            ? <div> товар в корзине</div>
            : <div> добавить в карзину</div>
          }
         
        </div>
    </div>
  );
}

export default CardFooter;