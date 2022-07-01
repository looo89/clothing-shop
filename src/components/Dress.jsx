import React  from "react";

import cl from './../App.module.css'
import CardItem from "./Card/CardItem";

function Dress(props) {

    const clData=[
        {
            id: "1",
            categoryId: "1",
            name: "Red Dress",
            price: "340",
            img: 'https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/-473Wx593H-461088032-blue-MODEL.jpg'
        },
        {
            id: "2",
            categoryId: "1",
            name: "Yellow Dress",
            price: "340",
        },
        {
            id: "3",
            categoryId: "1",
            name: "Red Skirt",
            price: "270",
        },
        {
          id: "4",
          categoryId: "1",
          name: "Red Dress",
          price: "340",
          img: 'https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/-473Wx593H-461088032-blue-MODEL.jpg'
      },
      {
          id: "5",
          categoryId: "1",
          name: "Yellow Dress",
          price: "340",
      },
      {
          id: "6",
          categoryId: "1",
          name: "Red Skirt",
          price: "270",
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

export default Dress;