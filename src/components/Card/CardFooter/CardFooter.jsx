import React, { useState } from "react";
import cl from './CardFooter.module.css'

import { addInBasketAction, updateBasketItem } from "../../../store/reducers/clothesReduser";
import { useDispatch, useSelector } from "react-redux";


function CardFooter({id, categoryId,name, price, img}) {
  
  const basket= useSelector(state=> state.clothesReduser.basket)
  const dispatch=useDispatch()
  const [count, setCount]= useState(1)
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
  
  const addProductInBasket=()=>{
    const addedProduct=basket.find((item)=>item.id===id)
    if(addedProduct){
      dispatch(updateBasketItem({id, count, price}))
    } else{
      dispatch(addInBasketAction({id, categoryId, name, price, count, img}))
    }
    setClicked(true)
  }

  

  return (
    <div className={cl.CardFooter}>
        <div className={cl.FooterOderWrapper}> 
          <div className={cl.FooterOderRow} onClick={deleteCount}>
            -
          </div>
          <div className={cl.FooterOderRow}>
            {count}
          </div>
          <div className={cl.FooterOderRow} onClick={addCount}>
            +
          </div>
        </div>
        
        <div className={cl.FooterBusket} onClick={addProductInBasket}>     
          {clicked 
            ? <div> товар в корзине</div>
            : <div> в корзину</div>
          }
         
        </div>
    </div>
  );
}

export default CardFooter;