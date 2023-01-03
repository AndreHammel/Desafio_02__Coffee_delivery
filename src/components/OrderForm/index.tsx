import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { Controller, useFormContext } from "react-hook-form";
import {
  ContainerForm,
  ContainerFormContent,
  FormAddressInfo,
  FormContent,
  FormHeaderInfo,
  PaymentType,
  PaymentTypeButton,
  TitleContainer,
} from "./styles";

export function OrderForm() {
  const { register, control } = useFormContext();
  return (
    <ContainerForm>
      <TitleContainer>Complete seu pedido</TitleContainer>
      <ContainerFormContent>
        <FormContent>
          <FormHeaderInfo variant="yellow-dark">
            <MapPin size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o enderço onde deseja receber seu pedido</span>
            </div>
          </FormHeaderInfo>
          <FormAddressInfo>
            <input type="text" placeholder="CEP" {...register("cep")} />
            <input type="text" placeholder="Rua" {...register("rua")} />
            <div>
              <input type="text" placeholder="Número" {...register("numero")} />
              <input
                type="text"
                placeholder="Complemento"
                {...register("complemento")}
              />
            </div>
            <div>
              <input type="text" placeholder="Bairro" {...register("bairro")} />
              <input type="text" placeholder="Cidade" {...register("cidade")} />
              <input type="text" placeholder="UF" {...register("uf")} />
            </div>
          </FormAddressInfo>
        </FormContent>
      </ContainerFormContent>
      <ContainerFormContent>
        <FormContent>
          <FormHeaderInfo variant="purple">
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </FormHeaderInfo>
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <PaymentType onValueChange={field.onChange} value={field.value}>
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
              );
            }}
          />
        </FormContent>
      </ContainerFormContent>
    </ContainerForm>
  );
}
