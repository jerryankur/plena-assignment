import React, {createContext, useContext, useState, ReactNode} from 'react';

type WishlistContextType = {
  wishlist: Set<number>;
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

type WishlistProviderProps = {
  children: ReactNode;
};

export const WishlistProvider: React.FC<WishlistProviderProps> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const addToWishlist = (productId: number) => {
    setWishlist(currentWishlist => {
      const newWishlist = new Set(currentWishlist);
      newWishlist.add(productId);
      return newWishlist;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(currentWishlist => {
      const newWishlist = new Set(currentWishlist);
      newWishlist.delete(productId);
      return newWishlist;
    });
  };

  const isInWishlist = (productId: number) => {
    return wishlist.has(productId);
  };

  return (
    <WishlistContext.Provider
      value={{wishlist, addToWishlist, removeFromWishlist, isInWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (context === null) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
