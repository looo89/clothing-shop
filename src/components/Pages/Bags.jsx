import React  from "react";

import cl from './Pages.module.css'
import CardItem from "../Card/CardItem";
import { useSelector } from "react-redux";

function Bags(props) {
  
  const clData= useSelector(state=> state.clothesReduser.data.bags) 

  return (
    <div>
       <div className={cl.Wrapper}>
       {clData.map(item=><CardItem
        key={item.id}
         id={item.id}
         categoryId={item.categoryId}
         name={item.name}
         price={item.price}
         img={item.img}
       />)}
      </div>  
    </div>
   
  );
}

export default Bags;