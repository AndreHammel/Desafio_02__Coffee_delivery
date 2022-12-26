import { ChangeEvent, createContext, ReactNode, useReducer } from "react";
import { ProductsReducer } from "./../reducers/Products/Products";
import { mock_data } from './../mock/mock_data'
import {  changeQtyAction, operationAddSubtractQtyAction } from "./../reducers/Products/Actions";

export interface ProductType {
  id: number,
  title: string,
  description: string,
  tags: string[]
  price: number
  qty: number;
  image: string;
}

interface ProductsContextType {
  handleButton: (id: number, type: string) => void
  handleInput: (event: ChangeEvent<HTMLInputElement> , id: number) => void
  products: ProductType[]
  amountProducts: number
}

export const ProductContext = createContext({} as ProductsContextType)

interface ProductProviderProps {
  children: ReactNode
}

function calculateQtyProducts(products: ProductType[]) {
  return products.reduce((acc, rec) => acc + rec.qty, 0)
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, dispatch] = useReducer( ProductsReducer, mock_data)

  const amountProducts = calculateQtyProducts(products)

  function handleButton(id: number, type: string) {
    dispatch(operationAddSubtractQtyAction(id, type))
  }

  function handleInput(event: ChangeEvent<HTMLInputElement> , id: number) {
    dispatch(changeQtyAction(Number(event.target.value), id))
  }

  return (
    <ProductContext.Provider value={ { handleButton,  handleInput, products, amountProducts} }>
      { children }
    </ProductContext.Provider>
  )
}