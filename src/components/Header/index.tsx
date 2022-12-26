import { 
  AmountInCartIndicator, 
  HeaderContainer,
  HeaderFixed,
  MapIndicator,
  ShoppingCartIndicator
} from './styles'
import logo from './../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export function Header() {
  const { amountProducts } = useContext(ProductContext)

  return (
    <HeaderFixed>
      <HeaderContainer>
        <img src={logo} alt='' />
        <div>
          <MapIndicator>
            <MapPin size={22} weight="fill"/>
            Porto Alegre
          </MapIndicator>
          <ShoppingCartIndicator>
            <ShoppingCart size={22} weight="fill"/>
            { amountProducts !== 0 && (<AmountInCartIndicator>{amountProducts}</AmountInCartIndicator>)}
          </ShoppingCartIndicator>
        </div>
      </HeaderContainer>
    </HeaderFixed>
  )
}