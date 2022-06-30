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
      <Header showMenu={toggleMenu}/>
      <ContentPage  menuActive={menuActive}/>
    </div>
  );
}

export default App;
