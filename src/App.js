import React, { useState } from "react";
import ContentPage from "./components/ContentPage";
import Header from "./components/Header/Header";



function App() {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu=()=>{
    setMenuActive(!menuActive)
  }
  return (
    <div>
      <Header toggleMenu={toggleMenu}/>
      <ContentPage  menuActive={menuActive} toggleMenu={toggleMenu}/>
    </div>
  );
}

export default App;
