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
  addSubtractQtyProductAction,
  changeQtyProductAction,
  resetValue,
} from "./../reducers/Products/Actions";
import { ShoppingCartReducer } from "../reducers/ShoppingCart/ShoppingCart";
import {
  addCartItem,
  addSubtractQtyCartAction,
  changeQtyCartAction,
  removeItemFromShoppingCart,
} from "../reducers/ShoppingCart/Actions";
import { FormSchemaType } from "../pages/Checkout";
import { validUF } from "../constants";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  qty: number;
  image: string;
}

export interface UserAddressType {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: typeof validUF[number];
  type: "credito" | "debito" | "dinheiro";
  complemento: string;
}
interface ProductsContextType {
  handleButtonAddItemProducts: (id: number, type: string) => void;
  handleButtonAddItemShoppingCart: (id: number, type: string) => void;
  handleInputChangeItemProducts: (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  handleInputChangeItemShoppingCart: (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  products: ProductType[];
  amountProducts: number;
  handleAddInShoppingCart: (id: number) => void;
  shoppingCart: ProductType[];
  handleRemoveItemFromShoppingCart: (id: number) => void;
  recorderUserAddressInfo: (data: FormSchemaType) => void;
  userAddress: UserAddressType;
}

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductsContextType);

export function ProductProvider({ children }: ProductProviderProps) {
  const [userAddress, setuserAddress] = useState<UserAddressType>(
    {} as UserAddressType
  );
  const [products, dispatchProducts] = useReducer(ProductsReducer, mock_data);
  const [shoppingCart, dispatchShoppingCart] = useReducer(
    ShoppingCartReducer,
    []
  );

  const amountProducts = shoppingCart.length;

  function handleButtonAddItemProducts(id: number, type: string) {
    dispatchProducts(addSubtractQtyProductAction(id, type));
  }

  function handleInputChangeItemProducts(
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    dispatchProducts(changeQtyProductAction(Number(event.target.value), id));
  }

  function handleButtonAddItemShoppingCart(id: number, type: string) {
    dispatchShoppingCart(addSubtractQtyCartAction(id, type));
  }

  function handleInputChangeItemShoppingCart(
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    dispatchShoppingCart(changeQtyCartAction(Number(event.target.value), id));
  }

  function handleAddInShoppingCart(id: number) {
    const indexOfProduct = products.findIndex((item) => item.id === id);
    dispatchShoppingCart(addCartItem(products[indexOfProduct]));
    dispatchProducts(resetValue(id));
  }

  function handleRemoveItemFromShoppingCart(id: number) {
    dispatchShoppingCart(removeItemFromShoppingCart(id));
  }

  function recorderUserAddressInfo(data: UserAddressType) {
    console.log("data->", data);
    setuserAddress(data);
    console.log("userAddress", userAddress);
  }

  return (
    <ProductContext.Provider
      value={{
        handleButtonAddItemProducts,
        handleButtonAddItemShoppingCart,
        handleInputChangeItemProducts,
        handleInputChangeItemShoppingCart,
        products,
        amountProducts,
        handleAddInShoppingCart,
        shoppingCart,
        handleRemoveItemFromShoppingCart,
        recorderUserAddressInfo,
        userAddress,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
