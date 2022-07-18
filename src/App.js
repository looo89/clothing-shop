import React, { useState } from "react";
import Header from "./components/Header/Header";
import ContentPage from "./components/Pages/ContentPage";



function App() {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu=()=>{
    setMenuActive(!menuActive)
  }
  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      
      <ContentPage  menuActive={menuActive} toggleMenu={toggleMenu}/>
    </div>
  );
}

export default App;
