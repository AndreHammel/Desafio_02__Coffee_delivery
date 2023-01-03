import { ShoppingCart } from "phosphor-react";
import { Hero } from "../../components/Hero";
import { Card, CardContent, CardPanel, CardsBoard, CardsList } from "./styles";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { AddSubtractPanel } from "../../components/AddSubtractPanel";

export function Home() {
  const { products, handleAddInShoppingCart } = useContext(ProductContext);

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
                <AddSubtractPanel id={item.id} qty={item.qty} />
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
