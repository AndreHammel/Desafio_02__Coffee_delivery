import produce from "immer";
import { ActionTypes } from "./Actions";
import { ProductType } from "../../context/ProductContext";

export function ProductsReducer (state: ProductType[], action: any)  {
  switch(action.type) {
    case ActionTypes.ADD_QTY: {
      const currentID = state.findIndex(item => item.id === action.payload.id)
      return produce(state, (draft) => {
        draft[currentID].qty = draft[currentID].qty + 1
      })
    }
    case ActionTypes.SUBTRACT_QTY: {
      const currentID = state.findIndex(item => item.id === action.payload.id)
      return produce(state, (draft) => {
        draft[currentID].qty = draft[currentID].qty - 1
      })
    }
    case ActionTypes.CHANGE_QTY: {
      const currentID = state.findIndex(item => item.id === action.payload.id)
      return produce(state, (draft) => {
        draft[currentID].qty = action.payload.qty
      })
    }
    default:
      return state
  }
}