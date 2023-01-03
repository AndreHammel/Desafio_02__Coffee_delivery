import { ProductType } from "../../context/ProductContext";
import { ActionTypes } from "../../constants";

export function addCartItem(data: ProductType) {
  return {
    type: ActionTypes.ADD_ITEM_CART,
    payload: { data },
  };
}

export function addSubtractQtyCartAction(id: number, type: string) {
  return {
    type,
    payload: { id },
  };
}

export function changeQtyCartAction(qty: number, id: number) {
  return {
    type: ActionTypes.CHANGE_QTY,
    payload: {
      qty,
      id,
    },
  };
}

export function removeItemFromShoppingCart(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: {
      id,
    },
  };
}
