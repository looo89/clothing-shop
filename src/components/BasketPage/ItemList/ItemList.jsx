import React from "react";
import cl from './ItemList.module.css'


import ItemProduct from "./ItemProduct/ItemProduct";

function ItemList({basket}) {
   

  return (
    <div className={cl.List}>
        {
          basket.map(b=>
            <ItemProduct key={b.id+ b.name}
              price={b.price}
              name={b.name} 
              count={b.count}
              img={b.img}
              id={b.id}
              categoryId={b.categoryId}
            />)
        }
    </div>
  );
}

export default ItemList;