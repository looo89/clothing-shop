import React, { useState }  from "react";
import XButton from "../../IU/XButton";
import cl from './SearchModalWindow.module.css';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchButton from "../../IU/SearchButton";


function SearchModalWindow({setSearch}) { 

  
  const [valueInput, setValueInput]= useState('')
  const handler=(e)=>{
    setValueInput(e.target.value)
  }


  const data= useSelector(state=> state.clothesReduser.data)
  const filteredDataDress = data.dress.filter(obj=> obj.name.toLowerCase().includes(valueInput.toLowerCase()))
  const filteredDataSkirt = data.skirt.filter(obj=> obj.name.toLowerCase().includes(valueInput.toLowerCase()))
  const filteredDataBags = data.bags.filter(obj=> obj.name.toLowerCase().includes(valueInput.toLowerCase()))
  const filteredData=[...filteredDataDress, ...filteredDataSkirt, ...filteredDataBags]

  return (
    <div >
      <form className={cl.InputWrapper}>
          <XButton onClick={()=>setSearch(false)} className={cl.XButton} />
      
        
          <input 
            className={cl.Input}
            name = 'changeNameList'
            value={valueInput}
            type="text" 
            onChange={e=>handler(e)}
          />
          {
            valueInput
            ? 
              <Link to="/searchPage" state={{ data: filteredData }} className={cl.LinkButton} >
                <SearchButton className={cl.Button}/> 
              </Link>
            :
            <SearchButton className={cl.Button}/> 
          }
          
         
            
      </form>
    </div>
  );
}

export default SearchModalWindow;