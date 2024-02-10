import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles.ts';
import {useCart} from '../providers/CartContext.tsx';
import {BackButton} from '../components/BackButton.tsx';
import {QuantityManipulate} from '../components/QuantityManipulate.tsx';

const CartScreen = () => {
  const {items} = useCart();
  const calculateTotals = () => {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const delivery = 2.0; // Flat rate for delivery
    const total = subtotal + delivery;
    return {subtotal, delivery, total};
  };

  // @ts-ignore
  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.label_medium}>{item.title}</Text>
        <Text style={styles.label_regular}>${item.price.toFixed(2)}</Text>
      </View>
      <QuantityManipulate productId={item.id} />
    </View>
  );

  const {subtotal, delivery, total} = calculateTotals();

  return (
    <View style={styles.container}>
      <View style={styles.cartHeader}>
        <BackButton />
        <Text style={[styles.b1_regular, styles.marginHorizontal]}>
          Shopping Cart ({items.length})
        </Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCartItem}
      />
      <View style={styles.summary}>
        {[
          ['Subtotal', subtotal],
          ['Delivery', delivery],
          ['Total', total],
        ].map(([label, value]) => (
          <View style={styles.summaryRow} key={label}>
            <Text style={styles.label_regular}>{label}</Text>
            <Text style={styles.label_medium}>${value}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.textSecondary}>Proceed To Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
