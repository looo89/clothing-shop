import React from "react";
import cl from './BasketPage.module.css'


function ItemProduct({name, count}) {
  

  return (
    <div className={cl.Item}>
     {name} колличество:   {count} штук
    </div>
  );
}

export default ItemProduct;