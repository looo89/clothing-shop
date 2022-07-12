import React from "react";
import cl from './ItemList.module.css'


import { useSelector } from "react-redux";
import ItemProduct from "./ItemProduct/ItemProduct";

function ItemList() {
    const basket= useSelector(state=> state.clothesReduser.basket)

  return (
    <div className={cl.List}>
        item list
        {basket.map(b=>
          <ItemProduct key={b.id+ b.name}
            price={b.price}
            name={b.name} 
            count={b.count}
            img={b.img}
          />)}
    </div>
  );
}

export default ItemList;