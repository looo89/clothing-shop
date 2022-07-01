import React  from "react";

import cl from './../App.module.css'
import CardItem from "./Card/CardItem";

function Panama(props) {

    const clData=[
        {
            id: "1",
            categoryId: "3",
            name: "Panama",
            price: "340",
            img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
        },
        {
            id: "2",
            categoryId: "3",
            name: "Yellow Panama",
            price: "340",
            img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
        },
        {
            id: "3",
            categoryId: "3",
            name: "Red Panama",
            price: "270",
            img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
        },
        {
          id: "4",
          categoryId: "3",
          name: "Panama",
          price: "340",
          img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
        },
      {
          id: "5",
          categoryId: "3",
          name: "Panama",
          price: "340",
          img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
      },
      {
          id: "6",
          categoryId: "3",
          name: "Panama",
          price: "270",
          img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
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

export default Panama;