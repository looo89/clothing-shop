import React  from "react";

import cl from './../App.module.css'
import Menu from "./Menu/Menu";
import Dress from "./Dress";
import Skirt from "./Skirt";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Panama from "./Panama";
import Bags from "./Bags";
import BasketPage from "./BasketPage/BasketPage";

function ContentPage(props) {

   

  return (
    <div>
      <div className={cl.Wrapper}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/dress' element={<Dress/>}/>
            <Route path='/skirt' element={<Skirt/>}/>
            <Route path='/panama' element={<Panama/>}/>
            <Route path='/bags' element={<Bags/>}/>
            <Route path='/basket' element={<BasketPage/>}/>
          </Routes>
        
      </div>
      {props.menuActive &&
        <Menu toggleMenu={props.toggleMenu}/>
      }
    </div>
   
  );
}

export default ContentPage;