import React  from "react";

import { Routes, Route } from "react-router-dom";
import Dress from "./Dress";
import Skirt from "./Skirt";
import Panama from "./Panama";
import Bags from "./Bags";
import HomePage from "./../Home/HomePage";
import BasketPage from "./../BasketPage/BasketPage";
import Menu from "./../Menu/Menu"


function ContentPage(props) {

  return (
    <div>
      <div>
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