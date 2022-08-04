import { mockData } from "../../data/mockData"



const ADD_IN_BASKET= 'ADD_IN_BASKET'
const UPDATE_BASKET_ITEM='UPDATE_BASKET_ITEM'
const ADD_ONE_PRODUCT='ADD_ONE_PRODUCT'
const DELETE_ONE_PRODUCT='DELETE_ONE_PRODUCT'
const DELETE_PRODUCT_IN_BASKET='DELETE_PRODUCT_IN_BASKET'
const SET_CURRENT_PRODUCT_PAGE='SET_CURRENT_PRODUCT_PAGE'


const initialState={
    data: mockData,
    basket:[
        
    ],
    totalCount: 0,
    totalPrice: 0,
    productPage: {},
}

export  const clothesReduser=(state= initialState, action)=>{
    switch(action.type) {
        case ADD_IN_BASKET : {
            return{ ...state,
                data: {...state.data},
                basket: [...state.basket,
                    {
                        id: action.payload.id,
                        categoryId: action.payload.categoryId,
                        name: action.payload.name,
                        price: action.payload.price,
                        count: action.payload.count,
                        img: action.payload.img
                    }
                ],
                totalCount: state.totalCount + action.payload.count,
                totalPrice: +state.totalPrice + +(action.payload.count*action.payload.price)
            }
        }
        case UPDATE_BASKET_ITEM: {
            return { ...state,
                data: {...state.data},
                basket: state.basket.map(el=>{
                    if(el.id===action.payload.id){
                        return {
                            ...el,
                            count: action.payload.count + el.count

                          }
                    } else {
                        return el;
                    }
                }),
                
                totalCount: state.totalCount + action.payload.count,
                totalPrice: +state.totalPrice + +(action.payload.count*action.payload.price)
            }
        }
        case ADD_ONE_PRODUCT: {
            return { ...state,
                data: {...state.data},
                basket: state.basket.map(el=>{
                    if(el.id===action.payload.id ){
                        return {
                            ...el,
                            count: el.count+1
                          }
                    } else {
                        return el;
                    }
                }),
                
                totalCount: state.totalCount + 1,
                totalPrice: +state.totalPrice + +action.payload.price
            }
        }

       case DELETE_ONE_PRODUCT: {
            return { ...state,
                data: {...state.data},
                basket: state.basket.map(el=>{
                    if(el.id===action.payload.id && el.count!==0){
                        return {
                            ...el,
                            count: el.count-1
                          }
                    } else {
                        return el;
                    }
                }),
                totalCount: state.totalCount -1 ,
                totalPrice: state.totalPrice - action.payload.price          
            }
        }
        case DELETE_PRODUCT_IN_BASKET: {
            return { ...state,
                data: {...state.data},
                basket: state.basket.filter(el=>el.id!==action.payload.id),
                totalCount: state.totalCount - action.payload.count,
                totalPrice: state.totalPrice - (action.payload.count*action.payload.price)
            }
        }
        case SET_CURRENT_PRODUCT_PAGE: {
            return { ...state,
                productPage: {
                    id: action.payload.id, 
                    categoryId: action.payload.categoryId,
                    name: action.payload.name, 
                    price: action.payload.price,
                    img: action.payload.img}
            }
        }
        
    
    default: return state
    }
    
}



export const addInBasketAction=(payload)=>({type: ADD_IN_BASKET, payload})
export const updateBasketItem=(payload)=>({type: UPDATE_BASKET_ITEM, payload})
export const addOneProduct=(payload)=>({type: ADD_ONE_PRODUCT, payload})
export const deleteOneProduct=(payload)=>({type: DELETE_ONE_PRODUCT, payload})
export const deleteProductInBasket=(payload)=>({type: DELETE_PRODUCT_IN_BASKET, payload})
export const setCurrentProductInBasket=(payload)=>({type:SET_CURRENT_PRODUCT_PAGE, payload})