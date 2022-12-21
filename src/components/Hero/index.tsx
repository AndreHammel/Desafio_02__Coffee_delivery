import {HeroContainer, Content, ContentTopics} from './styles'
import {ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import hero_image from './../../assets/hero_image.png'
export function Hero() {
  return (
    <HeroContainer>
      <Content>
        <p>Encontre o café perfeito para qualquer hora do dia</p>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <ContentTopics>
          <div>
            <div className='topic topic__shopping-cart'>
              <ShoppingCart size={16} weight="fill" />
            </div>
            Compra simples e segura
          </div>
          <div >
            <div className='topic topic__package'>
              <Package size={16} weight="fill"/>
            </div>
            Embalagem mantém o café intacto
          </div>
          <div>
            <div className='topic topic__timer'>
              <Timer size={16} weight="fill"/>
            </div>
            Entrega rápida e ratreada
          </div>
          <div>
            <div className='topic topic__coffee'>
              <Coffee size={16} weight="fill"/>
            </div>
            O café chega fresquinho até você
          </div>
        </ContentTopics>
      </Content>
      <img src={hero_image} alt=''/>
    </HeroContainer>
  )
}