import React  from "react";

import cl from './../App.module.css'
import CardItem from "./Card/CardItem";

function Bags(props) {

    const clData=[
        {
            id: "1",
            categoryId: "4",
            name: "Сумка",
            price: "340",
            img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
        },
        {
            id: "2",
            categoryId: "4",
            name: "Сумка",
            price: "340",
            img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"    
        },
        {
            id: "3",
            categoryId: "4",
            name: "Сумка",
            price: "270",
            img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
        },
        {
          id: "4",
          categoryId: "4",
          name: "Сумка",
          price: "340",
          img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
        },
      {
          id: "5",
          categoryId: "4",
          name: "Сумка",
          price: "340",
          img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
      },
      {
          id: "6",
          categoryId: "4",
          name: "Сумка",
          price: "270",
          img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
      },
    ]
   

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