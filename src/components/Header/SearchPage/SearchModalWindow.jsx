import React, { useState }  from "react";
import XButton from "../../IU/XButton";
import cl from './SearchModalWindow.module.css';

import { useSelector } from "react-redux";


function SearchModalWindow({search, setSearch}) {
  const data= useSelector(state=> state.clothesReduser.data)  

  // const filtereredData=data.filter(obj=>{
  //   return obj.name.toLowerCase().includes(valueInput.toLowerCase())
  // })
  console.log(data)
  
  const [valueInput, setValueInput]= useState('')
  const handler=(e)=>{
    setValueInput(e.target.value)
  }

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
      </form>
    </div>
   
  );
}

export default SearchModalWindow;