import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import {
  Container,
  SuccessOrderContainer,
  SuccessOrderContent,
  Topics,
} from "./styles";
import illustration from "./../../assets/others_imagens/Illustration.png";

enum TypePayment {
  credito = "Cartão de Crédito",
  debito = "Cartão de Debito",
  dinheiro = "Em Dinheiro",
}

export function SuccessOrder() {
  const { userAddress } = useContext(ProductContext);
  const { rua, numero, bairro, cidade, uf, type } = userAddress;
  return (
    <SuccessOrderContainer>
      <Container>
        <SuccessOrderContent>
          <span>Uhu! Pedido confirmado</span>
          <span>Agora é só aguardar que logo o café chegará até você</span>
          <div>
            <Topics bgColor="purple-dark">
              <div>
                <MapPin size={16} weight="fill" />
              </div>
              <div>
                <span>
                  Entrega em{" "}
                  <span>
                    <strong>
                      {rua}, {numero}
                    </strong>{" "}
                    {bairro}-{cidade}, {uf}
                  </span>
                </span>
              </div>
            </Topics>
            <Topics bgColor="yellow-dark">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <div>
                <span>Previsão de entrega</span>
                <div>
                  <strong>20 min - 30 min</strong>
                </div>
              </div>
            </Topics>
            <Topics bgColor="yellow">
              <div>
                <CurrencyDollar size={16} weight="fill" />
              </div>
              <div>
                <span>Pagamento na entrega</span>
                <div>
                  <strong>{TypePayment[type]}</strong>
                </div>
              </div>
            </Topics>
          </div>
        </SuccessOrderContent>
        <img src={illustration} alt="" />
      </Container>
    </SuccessOrderContainer>
  );
}
