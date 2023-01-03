import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ActionTypes } from "../../constants";
import { Panel } from "./styles";

interface AddSubtractPanelProps {
  id: number;
  qty: number;
  shoppingCart?: boolean;
}

export function AddSubtractPanel({
  id,
  qty,
  shoppingCart,
}: AddSubtractPanelProps) {
  const {
    handleButtonAddItemProducts,
    handleInputChangeItemProducts,
    handleButtonAddItemShoppingCart,
    handleInputChangeItemShoppingCart,
  } = useContext(ProductContext);

  function handleButtonSubtract(id: number) {
    if (shoppingCart) {
      handleButtonAddItemShoppingCart(id, ActionTypes.SUBTRACT_QTY);
    } else {
      handleButtonAddItemProducts(id, ActionTypes.SUBTRACT_QTY);
    }
  }

  function handleButtonAdd(id: number) {
    if (shoppingCart) {
      handleButtonAddItemShoppingCart(id, ActionTypes.ADD_QTY);
    } else {
      handleButtonAddItemProducts(id, ActionTypes.ADD_QTY);
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>, id: number) {
    if (shoppingCart) {
      handleInputChangeItemShoppingCart(event, id);
    } else {
      handleInputChangeItemProducts(event, id);
    }
  }

  return (
    <Panel>
      <button onClick={() => handleButtonSubtract(id)}>
        <Minus size={14} weight="bold" />
      </button>
      <input
        type="number"
        value={qty}
        onChange={(event) => handleInput(event, id)}
      />
      <button onClick={() => handleButtonAdd(id)}>
        <Plus size={14} weight="bold" />
      </button>
    </Panel>
  );
}
