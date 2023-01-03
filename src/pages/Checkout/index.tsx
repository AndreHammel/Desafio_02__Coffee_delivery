import { CheckoutContainer } from "./styles";
import { OrderForm } from "../../components/OrderForm";
import { OrderDetails } from "../../components/OrderDetails";

import { paymentMethods, validUF } from "../../constants";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const formSchema = zod.object({
  cep: zod.string().min(1),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.enum(validUF),
  type: zod.enum(paymentMethods),
});

type SchemaType = zod.infer<typeof formSchema>;

export interface FormSchemaType extends SchemaType {
  complemento: string;
}

export function Checkout() {
  const hookFormMethods = useForm<FormSchemaType>({
    defaultValues: {
      cep: "90250-440",
      rua: "Rua João Daniel Martinelli",
      numero: "102",
      bairro: "Farrapos",
      cidade: "Porto Alegre",
      uf: "RS",
      type: "credito",
    },
  });

  return (
    <CheckoutContainer>
      <FormProvider {...hookFormMethods}>
        <OrderForm />
        <OrderDetails />
      </FormProvider>
    </CheckoutContainer>
  );
}
