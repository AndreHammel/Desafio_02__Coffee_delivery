import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'


export function DefaultLayouts() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}