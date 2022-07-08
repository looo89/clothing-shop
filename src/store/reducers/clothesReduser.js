const ADD_IN_BASKET= 'ADD_IN_BASKET'

const initialState={
    data: {
        dress: [
        {
            id: "1",
            categoryId: "1",
            name: "Red Dress",
            price: "340",
            img: 'https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/-473Wx593H-461088032-blue-MODEL.jpg'
        },
        {
            id: "2",
            categoryId: "1",
            name: "Yellow Dress",
            price: "340",
        },
        {
            id: "3",
            categoryId: "1",
            name: "Red Skirt",
            price: "270",
        },
        {
          id: "4",
          categoryId: "1",
          name: "Red Dress",
          price: "340",
          img: 'https://assets.ajio.com/medias/sys_master/root/20210403/bsM4/606867797cdb8c1f147522ca/-473Wx593H-461088032-blue-MODEL.jpg'
      },
      {
          id: "5",
          categoryId: "1",
          name: "Yellow Dress",
          price: "340",
      },
      {
          id: "6",
          categoryId: "1",
          name: "Red Skirt",
          price: "270",
      },
        ],
        skirt: [
            {
                id: "1",
                categoryId: "2",
                name: "Black Skirt",
                price: "340",
                img: 'https://romans-cdn.rlab.net/images/extralarge/867a31f0-1921-433a-84aa-466f16955dca.jpg'
            },
            {
                id: "2",
                categoryId: "2",
                name: "Yellow Skirt",
                price: "340",
                img: 'https://media1.popsugar-assets.com/files/thumbor/GD9QrliX-3MsBtvHwf3MekvwroI/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2021/04/22/898/n/1922564/0ef7e1c46081ddb70c03e1.15128160_/i/Cute-Skirts-Amazon.jpg'
            },
            {
                id: "3",
                categoryId: "2",
                name: "Red Skirt",
                price: "270",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn57XbQ-9U68myWH298kctrQhkGXsMvrRBmw&usqp=CAU'
            },
            {
              id: "4",
              categoryId: "2",
              name: "Red Skirt",
              price: "340",
              img: 'https://cdn.shopify.com/s/files/1/2635/3244/products/572_4717_533x.jpg?v=1649137340'
              
            },
            {
                id: "5",
                categoryId: "2",
                name: "Pink Skirt",
                price: "340",
                img: 'https://img.ltwebstatic.com/images2_pi/2019/07/12/15629164243969762281.webp'
            },
            {
                id: "6",
                categoryId: "2",
                name: "Black Skirt",
                price: "270",
                img: 'https://m.media-amazon.com/images/I/513xkSE4hoL._UL1389_.jpg'
            },
        ],
        bags: [
            {
                id: "1",
                categoryId: "4",
                name: "Сумка",
                price: "340",
                img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
            },
            {
                id: "2",
                categoryId: "4",
                name: "Сумка",
                price: "340",
                img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"    
            },
            {
                id: "3",
                categoryId: "4",
                name: "Сумка",
                price: "270",
                img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
            },
            {
              id: "4",
              categoryId: "4",
              name: "Сумка",
              price: "340",
              img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
            },
          {
              id: "5",
              categoryId: "4",
              name: "Сумка",
              price: "340",
              img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
          },
          {
              id: "6",
              categoryId: "4",
              name: "Сумка",
              price: "270",
              img: "https://opt-1822404.ssl.1c-bitrix-cdn.ru/upload/catalog//YG%205340819%20BDA/YG%205340819%20BDA%201.jpg?1649337516523123"
          },
        ],
        panama: [
            {
                id: "1",
                categoryId: "3",
                name: "Panama",
                price: "340",
                img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
            },
            {
                id: "2",
                categoryId: "3",
                name: "Yellow Panama",
                price: "340",
                img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
            },
            {
                id: "3",
                categoryId: "3",
                name: "Red Panama",
                price: "270",
                img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
            },
            {
              id: "4",
              categoryId: "3",
              name: "Panama",
              price: "340",
              img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
            },
          {
              id: "5",
              categoryId: "3",
              name: "Panama",
              price: "340",
              img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
          },
          {
              id: "6",
              categoryId: "3",
              name: "Panama",
              price: "270",
              img: "https://sneakerstudio.ru/rus_pl_ZHENSKAIA-PANAMKA-adidas-Originals-Adicolor-Trefoil-Bucket-Hat-HD9711-1034235_2.jpg"
          },
        ],
    },
    basket:[
        
    ]
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
                        count: action.payload.count
                    }
                ]
            }
        }
    default: return state
    }
}



export const addInBasketAction=(payload)=>({type: ADD_IN_BASKET, payload})
