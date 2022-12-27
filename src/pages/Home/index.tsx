import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Hero } from "../../components/Hero";
import { Card, CardContent, CardPanel, CardsBoard, CardsList } from "./styles";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ActionTypes } from "../../reducers/Products/Actions";

export function Home() {
  const { products, handleButton, handleInput, handleAddInShoppingCart } =
    useContext(ProductContext);

  return (
    <>
      <Hero />
      <CardsBoard>
        <p>Nossos Cafés</p>
        <CardsList>
          {products.map((item) => (
            <Card key={item.id}>
              <CardContent>
                <img src={item.image} alt="" />
                <span>{item.tags[0]}</span>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </CardContent>
              <CardPanel>
                <div>
                  <span>R$</span>
                  <span>{item.price}</span>
                </div>
                <div>
                  <button
                    onClick={() =>
                      handleButton(item.id, ActionTypes.SUBTRACT_QTY)
                    }
                  >
                    <Minus size={14} weight="bold" />
                  </button>
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(event) => handleInput(event, item.id)}
                  />
                  <button
                    onClick={() => handleButton(item.id, ActionTypes.ADD_QTY)}
                  >
                    <Plus size={14} weight="bold" />
                  </button>
                </div>
                <button onClick={() => handleAddInShoppingCart(item.id)}>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </CardPanel>
            </Card>
          ))}
        </CardsList>
      </CardsBoard>
    </>
  );
}
