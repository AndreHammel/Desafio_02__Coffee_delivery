import { ProductType } from "../context/ProductContext";
import { formatterPrice } from "./formatterPrice";

export function calculateTotalPriceItens(shoppingCart: ProductType[]) {
  const totalItensPrice = shoppingCart.reduce((acc, rec) => {
    return acc + rec.qty * rec.price;
  }, 0);

  return totalItensPrice;
}
