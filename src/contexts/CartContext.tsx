// Step 1: Let's create the context with createContext
// Step 2: is here -- see in line number 25
// Step 3: will be in either App comp
// * Let's share the data to the necessary components through context provider
// Step 4: Get the data from the context using react hook called useContext in the header comp and products comp
// creating a custom hook in line no 51 for facitilating the data in header and products
import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cartItems: Product[]; // needed for Header comp
  addToCart: (product: Product) => void; // Needed for ProductsPage comp
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

// Step 2: Let's create a new Component CartProvider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // if we want cart data saved in rest api 
  // try connecting to rest api inside useEffect hook using axios / fetch
  const [cartItems, setCartItems] = useState<Product[]>([]); // needed for header comp

  // the following fn is needed for ProductsPage comp
  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems: cartItems, addToCart: addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// For Step 4, I want to create a custom hook -- it must have 'use' prefix. check Header.tsx and ProductsPage.tsx
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider component's descendents"
    );
  }
  return context;
};
