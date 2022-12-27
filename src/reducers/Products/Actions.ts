export enum ActionTypes {
  ADD_QTY = "ADD_QTY",
  SUBTRACT_QTY = "SUBTRACT_QTY",
  CHANGE_QTY = "CHANGE_QTY",
  RESET_QTY = "RESET_QTY",
}

export function operationAddSubtractQtyAction(id: number, type: string) {
  return {
    type,
    payload: { id },
  };
}

export function changeQtyAction(qty: number, id: number) {
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
