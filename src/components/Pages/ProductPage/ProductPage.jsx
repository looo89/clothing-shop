import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cl from './ProductPage.module.css'
import { addInBasketAction, addOneProduct, updateBasketItem } from "../../../store/reducers/clothesReduser";

function ProductPage() {
  const params=useParams()
  const prod= useSelector(state=> state.clothesReduser.productPage) 
  const id=prod.id
  const categoryId=prod.categoryId
  const count=1
  const price= prod.price
  const name=prod.name
  const img=prod.img

 const dispatch=useDispatch()
 
 const basket= useSelector(state=> state.clothesReduser.basket)
 const addProductInBasket=()=>{
  const addedProduct=basket.find((item)=>item.id===id)
  if(addedProduct){
    dispatch(updateBasketItem({id, count, price}))
  } else{
    dispatch(addInBasketAction({id, categoryId, name, price, count, img}))
  }
  }

       
  return (
    <div className={cl.Wrapper}>
      <div className={cl.CardWrapper}>
        <div className={cl.WrapperImg}>
          <img src={prod.img} alt=''/>
        </div>
        <div className={cl.Description}>
          <h1>{prod.name}</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti nesciunt voluptatibus assumenda iste animi ad, nemo quo, sit, natus eveniet beatae aliquid! Dolorum quo ex incidunt unde consequatur a?</p>
        
          <button className={cl.button} onClick={addProductInBasket}>
            Добавить в корзину
          </button>
        </div>

      </div>
    </div>
    
  );
}

export default ProductPage;