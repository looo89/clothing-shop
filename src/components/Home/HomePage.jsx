
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import cl from "./HomePage.module.css";



function HomePage() {
  const [textIndex, setTextIndex]=useState(1)
  const [imgIndex, setImgIndex]= useState(1)
  const textDivArray=[
      {className: cl.Text1, i: 1, text: 'Юбки', path:'/skirt'},
      {className: cl.Text2, i:2, text: 'Головные уборы', path:'/panama'}, 
      {className: cl.Text3, i:3, text: 'Платья', path:'/dress'}, 
      {className: cl.Text4, i:4, text: 'Сумки', path:'/bags'} 
    ]
  const imgDivArray = [{className: cl.Img1, i:1}, {className: cl.Img2, i: 2}, {className: cl.Img3, i: 3}, {className: cl.Img4, i:4}]

  const handlerUpClickArrow=()=>{
    if(textIndex===4 && imgIndex===4){
      setTextIndex(1)
      setImgIndex(1)
    } else {
      setTextIndex(textIndex+1)
      setImgIndex(imgIndex+1)
    } 
  }
  const handlerDownClickArrow=()=>{
    if(textIndex===1 && imgIndex===1){
      setTextIndex(4)
      setImgIndex(4)
    } else {
      setTextIndex(textIndex-1)
      setImgIndex(imgIndex-1)
    } 
  }
  return (
    <div className={cl.container}>

        <div className={cl.sidebar}>
          {textDivArray.map((item) =>
            {
              if (textIndex===item.i) 
               return <div className={`${item.className}`} key={item.i}>
                  <Link to={item.path} className={cl.Link}>{item.text}</Link>
                </div>
            }
          )}
        </div>

        <div className={cl.mainSlider}>
            {imgDivArray.map(item=>
              {
                if(imgIndex===item.i) return <div className={`${item.className}`} key={item.i}/>

              }  
            )}
          <div className={cl.Img1}>
          </div>
        </div>

        <div className={cl.controls}>
          <button className={cl.downButton} onClick={handlerUpClickArrow}>
            <ArrowDown className={cl.arrowButton}/>
          </button>
          <button className={cl.upButton} onClick={handlerDownClickArrow}>
            <ArrowUp className={cl.arrowButton} />
          </button>
      </div>
    </div>
  );
}

export default HomePage;