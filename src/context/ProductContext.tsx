import {
  ChangeEvent,
  createContext,
  ReactNode,
  useReducer,
  useState,
} from "react";
import { ProductsReducer } from "./../reducers/Products/Products";
import { mock_data } from "./../mock/mock_data";
import {
  changeQtyAction,
  operationAddSubtractQtyAction,
  resetValue,
} from "./../reducers/Products/Actions";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  qty: number;
  image: string;
}

interface ProductsContextType {
  handleButton: (id: number, type: string) => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
  products: ProductType[];
  amountProducts: number;
  handleAddInShoppingCart: (id: number) => void;
}

export const ProductContext = createContext({} as ProductsContextType);

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, dispatch] = useReducer(ProductsReducer, mock_data);
  const [addedInShoppingCart, setAddedInShoppingCart] = useState<ProductType[]>(
    []
  );

  const amountProducts = addedInShoppingCart.length;

  function handleButton(id: number, type: string) {
    dispatch(operationAddSubtractQtyAction(id, type));
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>, id: number) {
    dispatch(changeQtyAction(Number(event.target.value), id));
  }

  function handleAddInShoppingCart(id: number) {
    const indexOfProduct = products.findIndex((item) => item.id === id);
    setAddedInShoppingCart((prev) => [...prev, products[indexOfProduct]]);
    dispatch(resetValue(id));
  }

  return (
    <ProductContext.Provider
      value={{
        handleButton,
        handleInput,
        products,
        amountProducts,
        handleAddInShoppingCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
