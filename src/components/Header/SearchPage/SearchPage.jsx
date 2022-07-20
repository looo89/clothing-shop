import React  from "react";
import { useLocation } from "react-router-dom";

import CardItem from "./../../Card/CardItem"


function SearchPage() {
  const location=useLocation()
  const data = location.state?.data;
  console.log(data)

  return (
    <div>
        <div >
            {data.map(item=><CardItem
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

export default SearchPage;