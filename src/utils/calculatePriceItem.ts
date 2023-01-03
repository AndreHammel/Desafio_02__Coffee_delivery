import { formatterPrice } from "./formatterPrice";

export function calculatePriceItem(qty: number, price: number) {
  return formatterPrice(qty * price);
}
