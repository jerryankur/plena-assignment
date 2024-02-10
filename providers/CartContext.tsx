import React, {createContext, ReactNode, useContext, useState} from 'react';

export type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  isInCart: (productId: number) => number;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

export const toCartItem = (product: any): CartItem => ({
  id: product.id,
  title: product.title,
  price: product.price,
  thumbnail: product.thumbnail,
  quantity: 1,
});

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems(prevItems => {
      const itemIndex = prevItems.findIndex(i => i.id === item.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += item.quantity;
        return newItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(items.filter(item => item.id !== productId));
  };

  const isInCart = (productId: number) => {
    const product = items.find(item => item.id === productId);
    return product ? product.quantity : 0;
  };

  const increaseQuantity = (productId: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    const currentItem = items.find(item => item.id === productId);
    if (currentItem) {
      currentItem.quantity = Math.max(0, currentItem.quantity - 1);
      setItems(items.filter(item => item.quantity > 0));
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        isInCart,
        increaseQuantity,
        decreaseQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
