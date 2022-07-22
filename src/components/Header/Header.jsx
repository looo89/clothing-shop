import React, {useState} from "react";
import MenuButton from "../IU/MenuButton";
import cl from './Header.module.css'
import BasketButton from "../IU/BasketButton";
import SearchButton from "../IU/SearchButton";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import SearchModalWindow from "./SearchPage/SearchModalWindow";

function Header(props) {
  
  const totalCount=useSelector(state=> state.clothesReduser.totalCount)
  const [search, setSearch]=useState(false)

  


  return (
    <div className={cl.HeaderWrapper} >
        <MenuButton className={cl.MenuButton} onClick={props.toggleMenu}/>
        { search
          ? <SearchModalWindow search={search} setSearch={setSearch}/>
          : <></>
        }
        <div className={cl.HeaderButtonContainer}>
          <SearchButton className={cl.HeaderButton} onClick={()=>setSearch(!search)}/>
          <Link className={cl.BasketButtonLink} to="/basket">
            <BasketButton className={cl.HeaderButton}/>
            <div className={cl.count}>{totalCount}</div>
          </Link>
        </div>
    </div>
  );
}

export default Header;