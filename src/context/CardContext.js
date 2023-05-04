import { createContext } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);

  const addToCard = (id, name, price) => {
    const existItem = items.find((item) => item.id === id);

    if (existItem) {
      existItem.quantity++;
    } else {
      setItems([...items, { id: id, name: name, price: price, quantity: 1 }]);
    }
    setPrice(price + price);
  };

  const removeAll = () => {
    setItems([]);
  };

  return <></>;
};
