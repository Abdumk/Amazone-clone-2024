
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
       
case Type.REMOVE_FROM_BASKET:
  const index = state.basket.findIndex((item) => item.id === action.id); // Correct condition

  // Clone the basket to modify
  let newBasket = [...state.basket];

  if (index >= 0) {
    if (newBasket[index].amount > 1) {
      // Decrease the amount if more than 1
      newBasket[index] = { ...newBasket[index], amount: newBasket[index].amount - 1 };
    } else {
      // Remove the item from the basket
      newBasket.splice(index, 1);
    }
  } else {
    console.warn(`Item with id ${action.id} not found in basket`);
  }

  return {
    ...state,
    basket: newBasket,
  };

}}

