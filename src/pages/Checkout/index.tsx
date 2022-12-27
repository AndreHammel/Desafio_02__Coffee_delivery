import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import {
  CheckoutContainer,
  ContainerForm,
  ContainerFormContent,
  ContainerOrder,
  FormAddressInfo,
  FormContent,
  FormHeaderInfo,
  OrderContainer,
  PaymentType,
  PaymentTypeButton,
  TitleContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <ContainerForm>
        <TitleContainer>Complete seu pedido</TitleContainer>
        <ContainerFormContent>
          <FormContent>
            <FormHeaderInfo>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <span>Informe o enderço onde deseja receber seu pedido</span>
              </div>
            </FormHeaderInfo>
            <FormAddressInfo>
              <input type="text" placeholder="CEP" name="CEP" />
              <input type="text" placeholder="Rua" name="rua" />
              <div>
                <input type="text" placeholder="Número" name="numero" />
                <input
                  type="text"
                  placeholder="Complemento"
                  name="complemento"
                />
              </div>
              <div>
                <input type="text" placeholder="Bairro" name="bairro" />
                <input type="text" placeholder="Cidade" name="cidade" />
                <input type="text" placeholder="UF" name="uf" />
              </div>
            </FormAddressInfo>
          </FormContent>
        </ContainerFormContent>
        <ContainerFormContent>
          <FormContent>
            <FormHeaderInfo>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </FormHeaderInfo>
            <PaymentType>
              <PaymentTypeButton type="button" value="credito">
                <CreditCard size={16} />
                Cartão de crédito
              </PaymentTypeButton>
              <PaymentTypeButton type="button" value="debito">
                <Bank size={16} />
                Cartão de débito
              </PaymentTypeButton>
              <PaymentTypeButton type="button" value="dinheiro">
                <Money size={16} />
                Dinheiro
              </PaymentTypeButton>
            </PaymentType>
          </FormContent>
        </ContainerFormContent>
      </ContainerForm>

      <ContainerOrder>
        <OrderContainer>
          <p>Café selecionados</p>
        </OrderContainer>
      </ContainerOrder>
    </CheckoutContainer>
  );
}
