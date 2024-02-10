import React from 'react';
import {useCart} from '../providers/CartContext.tsx';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {styles} from '../styles.ts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// @ts-ignore
export const CartButton = ({color}) => {
  const {items} = useCart();
  const navigation = useNavigation();
  const totalQuantity = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0,
  );
  return (
    <View>
      <Icon
        name="purse-outline"
        size={30}
        // @ts-ignore
        onPress={() => navigation.navigate('Cart')}
        color={color}
      />
      {totalQuantity > 0 && (
        <View style={styles.badge}>
          <Text style={[styles.label_regular, styles.textSecondary]}>
            {totalQuantity}
          </Text>
        </View>
      )}
    </View>
  );
};
