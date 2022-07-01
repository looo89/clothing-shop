import React  from "react";

import cl from './../App.module.css'
import Menu from "./Menu/Menu";
import Dress from "./Dress";
import Skirt from "./Skirt";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Panama from "./Panama";
import Bags from "./Bags";

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
          </Routes>
        
      </div>
      {props.menuActive &&
        <Menu />
      }
    </div>
   
  );
}

export default ContentPage;