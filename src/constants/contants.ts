export const PRICE_DELIVERY = 3.5;
export const MAX_AMOUNT_PRODUCT = 99;
export const MIN_AMOUNT_PRODUCT = 1;

export enum ActionTypes {
  ADD_ITEM_CART = "ADD_ITEM_CART",
  ADD_QTY = "ADD_QTY",
  SUBTRACT_QTY = "SUBTRACT_QTY",
  CHANGE_QTY = "CHANGE_QTY",
  RESET_QTY = "RESET_QTY",
  REMOVE_ITEM_CART = "REMOVE_ITEM_CART",
}

export const validUF = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
] as const;

export const paymentMethods = ["credito", "debito", "dinheiro"] as const;
