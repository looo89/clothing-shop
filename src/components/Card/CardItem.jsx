import React, { useState }  from "react";
import cl from './CardItem.module.css'
import CardFooter from "./CardFooter/CardFooter";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { setCurrentProductInBasket } from "../../store/reducers/clothesReduser";

function CardItem({id, categoryId,name, price, img}) {
  const dispatch=useDispatch()
  const [IsShowFooter, setIsShowFooter] = useState(false)
  const showFooter=()=>{
    setIsShowFooter(true)
  }
  const closeFooter=()=>{
    setIsShowFooter(false)
  }

  const history=useNavigate()
  const setProductPage=()=>{
    history('/product/'+id)
    dispatch(setCurrentProductInBasket({id, categoryId,name, price, img}))
  }

  return (
    <div className={cl.CardWrapper} onMouseOver={showFooter}
      onMouseOut={closeFooter} >
        <div className={cl.CardWrapperImg} onClick={setProductPage}>
          <img src={img} alt=''/>
        </div>
        <div className={cl.CardDescription}>
            <div>{name}</div>
            <div>Цена: {price}</div>
        </div>
        { IsShowFooter 
          ? <div className={cl.Footer}>
              <CardFooter  id={id} categoryId={categoryId} name={name} price={price} img={img}/>
            </div>
          : <div className={cl.Footer}></div>
        }

    </div>
  );
}

export default CardItem;