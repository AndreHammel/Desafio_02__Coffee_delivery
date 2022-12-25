import { HeaderContainer, HeaderFixed } from './styles'
import logo from './../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderFixed>
      <HeaderContainer>
        <img src={logo} alt='' />
        <div>
          <div className='map'>
            <MapPin size={22} weight="fill"/>
            Porto Alegre
          </div>
          <div className='shopping-cart'>
            <ShoppingCart size={22} weight="fill"/>
            <div className='indicatorAmountInCart'>9+</div>
          </div>
        </div>
      </HeaderContainer>
    </HeaderFixed>
  )
}