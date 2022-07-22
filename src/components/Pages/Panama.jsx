import React  from "react";

import cl from './Pages.module.css';

import { useSelector } from "react-redux";
import CardItem from "../Card/CardItem";

function Panama(props) {

    
  const clData= useSelector(state=> state.clothesReduser.data.hats) 
   

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