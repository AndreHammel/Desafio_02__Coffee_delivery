const optionCurrency = {
  style: "currency",
  currency: "BRL",
};

const locale = "pt-BR";

export function formatterPrice(price: number) {
  return new Intl.NumberFormat(locale, optionCurrency).format(price);
}
