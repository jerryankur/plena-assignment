import React from 'react';
import {useCart} from '../providers/CartContext.tsx';
import {styles} from '../styles.ts';
import {Text, TouchableOpacity, View} from 'react-native';

export const QuantityManipulate = ({productId}: {productId: number}) => {
  const {isInCart, increaseQuantity, decreaseQuantity} = useCart();
  const quantityInCart = isInCart(productId);

  return (
    <View style={styles.quantityControls}>
      <TouchableOpacity
        style={styles.roundedButton}
        onPress={() => decreaseQuantity(productId)}>
        <Text style={styles.b2_regular}>-</Text>
      </TouchableOpacity>
      <Text style={styles.b2_regular}>{quantityInCart}</Text>
      <TouchableOpacity
        style={styles.roundedButton}
        onPress={() => increaseQuantity(productId)}>
        <Text style={styles.b2_regular}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
