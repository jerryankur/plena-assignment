import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, styles} from '../styles.ts';
import {CartButton} from '../components/CartButton.tsx';
import {toCartItem, useCart} from '../providers/CartContext.tsx';
import {WishlistButton} from '../components/WishlistButton.tsx';

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const [products, setProducts] = useState<any[]>([]);
  const navigation = useNavigation<HomeScreenProps>();
  const {isInCart, addToCart, removeFromCart} = useCart();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProducts(json.products))
      .catch(error => console.error(error));
  }, []);

  // @ts-ignore
  const handleAddToCart = product => {
    addToCart(toCartItem(product));
  };

  // @ts-ignore
  const renderProduct = ({item}) => (
    <View>
      <TouchableOpacity
        style={styles.productCard}
        onPress={() =>
          navigation.navigate('ProductDetails', {productId: item.id})
        }>
        <Image source={{uri: item.thumbnail}} style={styles.cardThumbnail} />
        <View style={styles.row}>
          <View style={styles.columnContainer}>
            <Text style={[styles.b1_semi_bold, styles.alignSelfStart]}>
              ${item.price}
            </Text>
            <Text style={[styles.label_regular, styles.alignSelfStart]}>
              {item.title}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.textRounded}
            onPress={() =>
              isInCart(item.id)
                ? removeFromCart(item.id)
                : handleAddToCart(item)
            }>
            <Text style={[styles.b2_regular, styles.textSecondary]}>
              {isInCart(item.id) ? '×' : '+'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <WishlistButton productId={item.id} style={styles.wishlistButtonLeft} />
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, styles.zeroPadding]}>
      <View style={styles.homeHeader}>
        <View style={styles.row}>
          <Text style={[styles.h3_regular, styles.textSecondary]}>
            Hey, Rahul
          </Text>
          <CartButton color={colors.ghostWhite} />
        </View>
        <View style={styles.searchBar}>
          <Icon name="magnify" size={20} color={colors.chineseSilver} />
          <TextInput
            style={styles.label_regular}
            placeholder="Search Products or store"
            placeholderTextColor={colors.chineseSilver}
          />
        </View>
        <View style={styles.row}>
          {[
            ['Delivery To', 'Green Way 3000, Sylhet'],
            ['Within', '1 Hour'],
          ].map(([label, value]) => (
            <View style={styles.columnContainer} key={label}>
              <Text
                style={[
                  styles.label_regular,
                  styles.textSecondary,
                  styles.alignSelfStart,
                ]}>
                {label}
              </Text>
              <Text
                style={[
                  styles.label_medium,
                  styles.textSecondary,
                  styles.alignSelfStart,
                ]}>
                {value}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.row, styles.promoCard]}>
          <Icon name={'tag'} size={30} color={colors.ghostWhite} />
          <View style={styles.columnContainer}>
            <Text
              style={[
                styles.b1_regular,
                styles.textSecondary,
                styles.alignSelfStart,
              ]}>
              Get
            </Text>
            <Text
              style={[
                styles.h3_bold,
                styles.textSecondary,
                styles.alignSelfStart,
              ]}>
              50% OFF
            </Text>
            <Text
              style={[
                styles.label_regular,
                styles.textSecondary,
                styles.alignSelfStart,
              ]}>
              On first 03 order
            </Text>
          </View>
        </View>

        <Text style={styles.h2_regular}>Products</Text>
        <FlatList
          columnWrapperStyle={styles.cards}
          data={products}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
