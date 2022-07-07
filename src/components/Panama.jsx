import React  from "react";

import cl from './../App.module.css'
import CardItem from "./Card/CardItem";

import { useSelector } from "react-redux";

function Panama(props) {

    
  const clData= useSelector(state=> state.clothesReduser.data.panama) 
   

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

export default Panama;