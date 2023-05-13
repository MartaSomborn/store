import { createContext } from "react";
import { useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);
  const [newPrice, setNewPrice] = useState(0);

  const addToCard = (id, name, price) => {
    const existItem = items.find((item) => item.id === id);

    if (existItem) {
      existItem.quantity++;
      // existItem.price++;
      setNewPrice(newPrice + Number(existItem.price));
      const newItems = items;
      newItems[id] = {
        ...newItems[id],
        price: newPrice,
      };

      setItems(newItems);
    } else {
      setItems([...items, { id: id, name: name, price: price, quantity: 1 }]);
    }

    console.log("price", price);
    console.log("newPrice", newPrice);
  };

  const removeSingle = (id) => {
    const existItem = items.find((item) => item.id === id);

    if (existItem.quantity === 1) {
      const itemAfterRemove = items.map((item) => item.id !== id);
      setItems(itemAfterRemove);
      console.log("itemAfterRemove", itemAfterRemove);
    } else {
      existItem.quantity--;
    }
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <CardContext.Provider
        value={{ addToCard, removeSingle, removeAll, items }}
      >
        {children}
      </CardContext.Provider>
    </>
  );
}

export default CardContext;
