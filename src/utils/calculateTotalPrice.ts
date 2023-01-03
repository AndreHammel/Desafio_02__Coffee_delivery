import { PRICE_DELIVERY } from "../constants";

export function calculateTotalPrice(totalPriceItens: number) {
  return totalPriceItens + PRICE_DELIVERY;
}
