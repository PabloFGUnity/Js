import { useContext, useState, createContext } from "react";

const CartContext = createContext({
  totalItems: 0,
  items: [],
  addToCart: () => {},
  removeToCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  console.log(items);


  function addToCart(item) {
    const currentItems = [...items];
    const cartItemIndex = items.findIndex((element) => element.id === item.id);
    if (cartItemIndex !== -1) {
      currentItems[cartItemIndex].total = currentItems[cartItemIndex].total + 1;
      setItems(currentItems);
    } else {
      setItems((currentItems) => [...currentItems, { ...item, total: 1 }]);
    }
  }

  function removeToCart(id) {
    const currentItems = [...items];
    const itemToRemove = currentItems.find((item) => item.id === id);
    if (itemToRemove && itemToRemove.total > 1) {
      itemToRemove.total = itemToRemove.total - 1;
      setItems(currentItems);
    } else {
      setItems((currentItems) => currentItems.filter((item) => item.id !== id))
    }
  }

  const total = items.reduce((acc, item) => {
    const { total } = item;
    return acc + total;
  }, 0);

  const value = {
    totalItems: total,
    items,
    addToCart,
    removeToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
