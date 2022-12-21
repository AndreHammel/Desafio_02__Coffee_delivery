import { Routes, Route } from 'react-router-dom'
import { DefaultLayouts } from '../layouts/DefaultLayouts'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { SuccessOrder } from '../pages/SucessOrder'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayouts />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}