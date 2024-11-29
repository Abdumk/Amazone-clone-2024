
import { Type } from './Action.type';

export const initialState = {
    basket:[]
}
export const reducer = (state,action)=>{
switch (action.type) {
    case Type.ADD_TO_BASKET:
        return{
            // 3dot or ... spread operator use to catch previuos value and add new value
          ...state,
          basket:[...state.basket,action.item]

        }
       
    default:
        return state;
}

}