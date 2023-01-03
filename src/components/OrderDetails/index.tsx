import { Trash } from "phosphor-react";
import { Fragment, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PRICE_DELIVERY, validUF } from "../../constants";
import { ProductContext, UserAddressType } from "../../context/ProductContext";
import { FormSchemaType } from "../../pages/Checkout";
import {
  calculatePriceItem,
  calculateTotalPrice,
  calculateTotalPriceItens,
  formatterPrice,
} from "../../utils";
import { AddSubtractPanel } from "../AddSubtractPanel";
import {
  Bill,
  BillContainer,
  Card,
  CardPanel,
  ContainerOrder,
  ContainerOrderContent,
  OrderContent,
  Price,
  TitleContainer,
} from "./styles";

export function OrderDetails() {
  const {
    shoppingCart,
    handleRemoveItemFromShoppingCart,
    recorderUserAddressInfo,
  } = useContext(ProductContext);
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const navigate = useNavigate();

  function handleSubmitForm(data: any) {
    recorderUserAddressInfo(data);
    navigate("/success");
  }

  const totalPriceItens = calculateTotalPriceItens(shoppingCart);
  const totalPrice = calculateTotalPrice(totalPriceItens);
  const formattedTotalPriceItens = formatterPrice(totalPriceItens);
  const formattedTotalPrice = formatterPrice(totalPrice);
  const formattedDeliveryTax = formatterPrice(PRICE_DELIVERY);

  return (
    <ContainerOrder>
      <TitleContainer>Café selecionados</TitleContainer>
      <ContainerOrderContent>
        <OrderContent>
          {shoppingCart.map((item) => (
            <Fragment key={item.id}>
              <Card>
                <img src={item.image} />
                <div>
                  <div>{item.title}</div>
                  <CardPanel>
                    <AddSubtractPanel
                      id={item.id}
                      qty={item.qty}
                      shoppingCart
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveItemFromShoppingCart(item.id)}
                    >
                      <Trash size={16} />
                      Remover
                    </button>
                  </CardPanel>
                </div>
                <Price>
                  <span>{calculatePriceItem(item.qty, item.price)}</span>
                </Price>
              </Card>
              <hr />
            </Fragment>
          ))}
          <BillContainer>
            <Bill>
              <span>Total de itens</span>
              <span>{formattedTotalPriceItens}</span>
            </Bill>
            <Bill>
              <span>Entrega</span>
              <span>{formattedDeliveryTax}</span>
            </Bill>
            <Bill variant="bold">
              <span>Total</span>
              <span>{formattedTotalPrice}</span>
            </Bill>
          </BillContainer>
          <button onClick={handleSubmit(handleSubmitForm)}>
            Confirmar pedido
          </button>
        </OrderContent>
      </ContainerOrderContent>
    </ContainerOrder>
  );
}
