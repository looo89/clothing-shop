import React, { useState }  from "react";
import cl from './CardItem.module.css'
import CardFooter from "./CardFooter/CardFooter";

function CardItem({id, categoryId,name, price, img}) {
  const [IsShowFooter, setIsShowFooter] = useState(false)
  const showFooter=()=>{
    setIsShowFooter(true)
  }
  const closeFooter=()=>{
    setIsShowFooter(false)
  }

       
  return (
    <div className={cl.CardWrapper} onMouseOver={showFooter}
      onMouseOut={closeFooter}>
        <div className={cl.CardWrapperImg}>
          <img src={img} alt=''/>
        </div>
        <div className={cl.CardDescription}>
            <div>{name}</div>
            <div>Цена: {price}</div>
        </div>
        { IsShowFooter 
          ?
            <CardFooter  id={id} categoryId={categoryId} name={name} price={price} img={img}/>
          : <div className={cl.Footer}></div>
        }
        

    </div>
  );
}

export default CardItem;