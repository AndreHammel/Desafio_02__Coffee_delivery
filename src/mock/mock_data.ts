import {
  expresso, 
  americano, 
  expressoCremoso,
  expressoGelado,
  cafeComLeite,
  latte,
  capuccino,
  macchiato,
  mocaccino,
  chocolateQuente,
  cubano,
  havaiano,
  arabe,
  irlandes,} from "../assets/image_products"

export const mock_data = [
  {
    id: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["tradicional"],
    price: 9.99,
    qty: 1,
    image: expresso,
  },
  {
    id: 2,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["tradicional"],
    price: 9.99,
    qty: 1,
    image: americano,
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["tradicional"],
    price: 9.99,
    qty: 1,
    image: expressoCremoso,
  },
  {
    id: 4,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["tradicional", 'gelado'],
    price: 9.99,
    qty: 1,
    image: expressoGelado,
  },
  {
    id: 5,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["tradicional", 'com leite'],
    price: 9.99,
    qty: 1,
    image: cafeComLeite,
  },
  {
    id: 6,
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["tradicional", 'com leite'],
    price: 9.99,
    qty: 1,
    image: latte,
  },
  {
    id: 7,
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["tradicional", 'com leite'],
    price: 9.99,
    qty: 1,
    image: capuccino,
  },
  {
    id: 8,
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["tradicional", 'com leite'],
    price: 9.99,
    qty: 1,
    image: macchiato,
  },
  {
    id: 9,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["tradicional", 'com leite'],
    price: 9.99,
    qty: 1,
    image: mocaccino,
  },
  {
    id: 10,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["tradicional", 'com leite'],
    price: 9.99,
    qty: 1,
    image: chocolateQuente,
  },
  {
    id: 11,
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", 'alcoólico', 'gelado'],
    price: 9.99,
    qty: 1,
    image: cubano,
  },
  {
    id: 12,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    price: 9.99,
    qty: 1,
    image: havaiano,
  },
  {
    id: 13,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    price: 9.99,
    qty: 1,
    image: arabe,
  },
  {
    id: 14,
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", 'alcoólico'],
    price: 9.99,
    qty: 1,
    image: irlandes,
  },
];