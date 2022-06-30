import React  from "react";
import CardItem from "./CardItem";

import cl from './../App.module.css'

function ContentPage(props) {

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
            categoryId: "2",
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
      {props.menuActive &&
      
        <div className={cl.Menu}>
          <h3>Меню</h3>
          <div>пункт меню 1</div>
          <div>пункт меню 2</div>
          <div>пункт меню 3</div>
          <div>пункт меню 4</div>
        </div>
      }
    </div>
   
  );
}

export default ContentPage;