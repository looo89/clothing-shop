import React from "react";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import cl from "./HomePage.module.css";



function HomePage() {
  
  
 

  return (
    <div className={cl.container}>
        <div className={cl.sidebar}>
          <div className={cl.Text1}>
            Text1
          </div>
          <div className={cl.Text2}>
            Text2
          </div>
          <div className={cl.Text3}>
            Text3
          </div>
          <div className={cl.Text4}>
            Text4
          </div>
        </div>

        <div className={cl.mainSlider}>
          <div className={cl.Img1}>
          </div>
          <div className={cl.Img2}>
          </div>
          <div className={cl.Img3}>
          </div>
          <div className={cl.Img4}>
          </div>
        </div>

        <div className={cl.controls}>
          <button className={cl.downButton}>
            <ArrowDown className={cl.arrowButton}/>
          </button>
          <button className={cl.upButton}>
            <ArrowUp className={cl.arrowButton} />
          </button>
      </div>
    </div>
  );
}

export default HomePage;

