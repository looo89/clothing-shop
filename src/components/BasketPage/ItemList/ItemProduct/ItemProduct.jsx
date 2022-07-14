import React from "react";
import cl from './ItemProduct.module.css'
import { useDispatch } from "react-redux";
import { addOneProduct, deleteOneProduct, deleteProductInBasket} from "../../../../store/reducers/clothesReduser";
import DeleteButton from './../../../IU/DeleteButton'


function ItemProduct({name, count, price, img, id, categoryId}) {
  const dispatch=useDispatch()

  const addProduct=()=>{
    dispatch(addOneProduct({id, price}))
  }
  const deleteProduct=()=>{
    if (count===1){
      dispatch(deleteProductInBasket({id, count, price}))
    } else {
      dispatch(deleteOneProduct({id, price}))
    }
  }
  const deleteAllProduct=()=>{
    dispatch(deleteProductInBasket({id, count, price}))
  }


  return (
    <div className={cl.ItemWrapper}>
      <div className={cl.ImgWrapper}>
        <img src={img} alt='gg'/>
      </div>
      <div className={cl.PayWrapper}>
        <div >{name}</div>
        <div>{`${price*count}`} руб</div>
        <div>{count} штуки</div>
        <div className={cl.AddButtonWrapper}>
          <div className={cl.AddButton} onClick={deleteProduct}>-</div>
          <div className={cl.AddButton}>{count}</div>
          <div className={cl.AddButton} onClick={addProduct}>+</div>
        </div>        
      </div>     
      <DeleteButton className={cl.DeleteButton} onClick={deleteAllProduct}/>
    </div>
  );
}

export default ItemProduct;