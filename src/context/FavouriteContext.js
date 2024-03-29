import { createContext, useState } from "react";
import { toast } from "react-toastify";

const FavouriteContext = createContext();

export function FavouriteProvider({ children }) {
  const [favouriteItems, setFavouriteItems] = useState([]);

  const addToFavourite = (id, photo, name, price) => {
    const existItem = favouriteItems.find((item) => item.id === id);
    if (existItem) {
      console.log("Item exist");
    } else {
      setFavouriteItems([
        ...favouriteItems,
        { id: id, photo: photo, name: name, price: price },
      ]);
    }
  };

  const removeSingleFavourite = (id) => {
    const existItem = favouriteItems.find((item) => item.id === id);

    if (existItem) {
      const itemAfterRemove = favouriteItems.filter((item) => item.id !== id);
      setFavouriteItems(itemAfterRemove);
    }
    toast.error("Deleted from favourites !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <FavouriteContext.Provider
        value={{ addToFavourite, removeSingleFavourite, favouriteItems }}
      >
        {children}
      </FavouriteContext.Provider>
    </>
  );
}

export default FavouriteContext;
