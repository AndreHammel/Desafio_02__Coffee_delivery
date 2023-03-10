import produce from "immer";
import { ActionTypes } from "../../constants";
import { ProductType } from "../../context/ProductContext";
import { MAX_AMOUNT_PRODUCT, MIN_AMOUNT_PRODUCT } from "../../constants";

export function ProductsReducer(state: ProductType[], action: any) {
  const currentID = state.findIndex((item) => item.id === action.payload?.id);

  switch (action.type) {
    case ActionTypes.ADD_QTY: {
      return produce(state, (draft) => {
        if (draft[currentID].qty >= MAX_AMOUNT_PRODUCT) {
          draft[currentID].qty = draft[currentID].qty;
          return;
        }
        draft[currentID].qty = draft[currentID].qty + 1;
      });
    }
    case ActionTypes.SUBTRACT_QTY: {
      return produce(state, (draft) => {
        if (draft[currentID].qty <= MIN_AMOUNT_PRODUCT) {
          draft[currentID].qty = draft[currentID].qty;
          return;
        }
        draft[currentID].qty = draft[currentID].qty - 1;
      });
    }
    case ActionTypes.CHANGE_QTY: {
      return produce(state, (draft) => {
        if (action.payload.qty > MAX_AMOUNT_PRODUCT) {
          draft[currentID].qty = MAX_AMOUNT_PRODUCT;
          return;
        }
        if (action.payload.qty < MIN_AMOUNT_PRODUCT) {
          draft[currentID].qty = MIN_AMOUNT_PRODUCT;
          return;
        }
        draft[currentID].qty = action.payload.qty;
      });
    }
    case ActionTypes.RESET_QTY: {
      return produce(state, (draft) => {
        draft[currentID].qty = 1;
      });
    }
    default:
      return state;
  }
}
