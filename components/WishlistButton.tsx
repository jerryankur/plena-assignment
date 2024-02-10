import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {useWishlist} from '../providers/WishlistContext.tsx';
import {colors} from '../styles.ts';

// @ts-ignore
export const WishlistButton = ({productId, style}) => {
  const {addToWishlist, removeFromWishlist, isInWishlist} = useWishlist();

  const isFavorite = isInWishlist(productId);
  const onWishlistToggle = isFavorite ? removeFromWishlist : addToWishlist;

  return (
    <TouchableOpacity style={style} onPress={() => onWishlistToggle(productId)}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavorite ? colors.red : colors.darkGunmetal}
      />
    </TouchableOpacity>
  );
};
