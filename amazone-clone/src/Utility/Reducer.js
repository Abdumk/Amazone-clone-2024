
import { Type } from './Action.type';

export const initialState = {
    basket:[]
}
export const reducer = (state,action)=>{
switch (action.type) {
    case Type.ADD_TO_BASKET:

// check if the item exists
const existingItem = state.basket.find((item) =>item.id === action.item.id)

if (!existingItem){

  return{
    // 3dot or ... spread operator use to catch previuos value and add new value
    ...state,
    basket:[...state.basket,{...action.item,amount:1}]
  }
}else{
  const updatedBasket = state.basket.map((item)=>{
    return item.id === action.item.id? {...item,amount:item.amount  + 1}:item
  })
  return {
    ...state,
    basket :updatedBasket

  
  
  }
}
       
    default:
        return state;
}

}


// Reducer.js for practice
// import { Type } from './Action.type';

// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       return {
//         ...state,
//         basket: [...state.basket, action.item],
//       };

//     case Type.REMOVE_FROM_BASKET:
//       return {
//         ...state,
//         basket: state.basket.filter(item => item.id !== action.id),
//       };

//     default:
//       return state;
//   }
// };