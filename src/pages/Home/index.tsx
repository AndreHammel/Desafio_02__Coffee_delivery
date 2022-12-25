import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Hero } from "../../components/Hero";
import { Card, CardContent, CardPanel, CardsBoard, CardsList } from "./styles";
import { mock_data } from "../../mock/mock_data";



export function Home() {
  return (
    <>
      <Hero />
      <CardsBoard>
        <p>Nossos Cafés</p>
        <CardsList>
        {mock_data.map((item) => (
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
                    <button><Minus size={14} weight="bold" /></button>
                    <input type="number" value={item.qty} max={99}/>
                    <button><Plus size={14} weight="bold"/></button>
                </div>
                <button>
                  <ShoppingCart size={22} weight="fill"/>
                </button>
            </CardPanel>
          </Card>
        ))}
        </CardsList>
      </CardsBoard>
    </>
  );
}
