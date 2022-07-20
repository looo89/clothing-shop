import React, { useState }  from "react";
import XButton from "../../IU/XButton";
import cl from './SearchModalWindow.module.css';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createContext } from "react";


function SearchModalWindow({search, setSearch, onChange}) { 

  
  const [valueInput, setValueInput]= useState('')
  const handler=(e)=>{
    setValueInput(e.target.value)
  }


  const data= useSelector(state=> state.clothesReduser.data)
  const filteredDataDress = data.dress.filter(obj=> obj.name.toLowerCase().includes(valueInput.toLowerCase()))
  const filteredDataSkirt = data.skirt.filter(obj=> obj.name.toLowerCase().includes(valueInput.toLowerCase()))
  const filteredDataBags = data.bags.filter(obj=> obj.name.toLowerCase().includes(valueInput.toLowerCase()))
  const filteredDataHats = data.hats.filter(obj=> obj.name.toLowerCase().includes(valueInput.toLowerCase()))
  const filteredData=[...filteredDataDress, ...filteredDataSkirt, ...filteredDataBags, ...filteredDataHats]
  console.log(filteredData)


  return (
    <div >
      <form className={cl.InputWrapper}>
        <input 
          className={cl.Input}
          name = 'changeNameList'
          value={valueInput}
          type="text" 
          onChange={e=>handler(e)}
        /> 
        <XButton  className={cl.XButton} onClick={()=>setSearch(false)}/>
        <Link to="/searchPage" state={{ data: filteredData }}>
          <button type="submit">найти</button>
        </Link>
        
      </form>
    </div>
   
  );
}

export default SearchModalWindow;