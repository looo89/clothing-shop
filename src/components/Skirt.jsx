import React  from "react";

import cl from './../App.module.css'
import CardItem from "./Card/CardItem";

function Skirt(props) {

    const clData=[
        {
            id: "1",
            categoryId: "2",
            name: "Black Skirt",
            price: "340",
            img: 'https://romans-cdn.rlab.net/images/extralarge/867a31f0-1921-433a-84aa-466f16955dca.jpg'
        },
        {
            id: "2",
            categoryId: "2",
            name: "Yellow Skirt",
            price: "340",
            img: 'https://media1.popsugar-assets.com/files/thumbor/GD9QrliX-3MsBtvHwf3MekvwroI/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2021/04/22/898/n/1922564/0ef7e1c46081ddb70c03e1.15128160_/i/Cute-Skirts-Amazon.jpg'
        },
        {
            id: "3",
            categoryId: "2",
            name: "Red Skirt",
            price: "270",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn57XbQ-9U68myWH298kctrQhkGXsMvrRBmw&usqp=CAU'
        },
        {
          id: "4",
          categoryId: "2",
          name: "Red Skirt",
          price: "340",
          img: 'https://cdn.shopify.com/s/files/1/2635/3244/products/572_4717_533x.jpg?v=1649137340'
          
        },
        {
            id: "5",
            categoryId: "2",
            name: "Pink Skirt",
            price: "340",
            img: 'https://img.ltwebstatic.com/images2_pi/2019/07/12/15629164243969762281.webp'
        },
        {
            id: "6",
            categoryId: "2",
            name: "Black Skirt",
            price: "270",
            img: 'https://m.media-amazon.com/images/I/513xkSE4hoL._UL1389_.jpg'
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

export default Skirt;