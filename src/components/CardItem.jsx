import React  from "react";
import cl from './../App.module.css'

function CardItem({id, categoryId,name, price, img}) {

       
  return (
    <div className={cl.CardWrapper}>
        <div className={cl.CardWrapperImg}>
          <img src={img} alt=''/>
        </div>
        <div className={cl.CardDescription}>
            <div>{name}</div>
            <div>Цена: {price}</div>
        </div>
        <div>
        
        </div>

    </div>
  );
}

export default CardItem;