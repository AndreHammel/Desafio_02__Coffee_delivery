import {
  AmountInCartIndicator,
  HeaderContainer,
  HeaderFixed,
  MapIndicator,
  ShoppingCartIndicator,
} from "./styles";
import logo from "./../../assets/others_imagens/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { amountProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  function handleButtonShoppingCart() {
    navigate("/checkout");
  }
  return (
    <HeaderFixed>
      <HeaderContainer>
        <img src={logo} alt="" />
        <div>
          <MapIndicator>
            <MapPin size={22} weight="fill" />
            Porto Alegre
          </MapIndicator>
          <ShoppingCartIndicator onClick={handleButtonShoppingCart}>
            <ShoppingCart size={22} weight="fill" />
            {amountProducts !== 0 && (
              <AmountInCartIndicator>{amountProducts}</AmountInCartIndicator>
            )}
          </ShoppingCartIndicator>
        </div>
      </HeaderContainer>
    </HeaderFixed>
  );
}
