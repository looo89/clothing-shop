import React from "react";
import cl from './ItemProduct.module.css'


function ItemProduct({name, count, price, img}) {
  
  return (
    <div className={cl.ItemWrapper}>
      <div className={cl.ImgWrapper}>
        <img src={img} alt='gg'/>
      </div>
      <div className={cl.DescriptionWrapper}>
        <div >{name}</div>
      </div>
      <div className={cl.PayWrapper}>
        <div>{`${price*count}`} руб</div>
        <div>{count} штуки</div>
        <div className={cl.AddButtonWrapper}>
          <div className={cl.AddButton}>-</div>
          <div className={cl.AddButton}>{count}</div>
          <div className={cl.AddButton}>+</div>
        </div>        
      </div>
    </div>
  );
}

export default ItemProduct;