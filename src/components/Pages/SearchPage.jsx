import React  from "react";
import { useLocation } from "react-router-dom";
import CardItem from "../Card/CardItem";

import cl from './Pages.module.css';


function SearchPage() {
  const location=useLocation()
  const data = location.state?.data;
  console.log(data)

  return (
    <div>
      {
        data.length
        ?
        <div className={cl.Wrapper}>
          {data.map(item=><CardItem
              key={item.id}
              id={item.id}
              categoryId={item.categoryId}
              name={item.name}
              price={item.price}
              img={item.img}
          />)}
        </div>
        :
        <div>По вашему запросу результаты не найдены</div>
      }
        
       
    </div>
    
   
  );
}

export default SearchPage;