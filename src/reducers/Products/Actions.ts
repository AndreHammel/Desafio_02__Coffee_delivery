import { ActionTypes } from "../../constants";

export function addSubtractQtyProductAction(id: number, type: string) {
  return {
    type,
    payload: {
      id,
    },
  };
}

export function changeQtyProductAction(qty: number, id: number) {
  return {
    type: ActionTypes.CHANGE_QTY,
    payload: {
      qty,
      id,
    },
  };
}

export function resetValue(id: number) {
  return {
    type: ActionTypes.RESET_QTY,
    payload: {
      id,
    },
  };
}
