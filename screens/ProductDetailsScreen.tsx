import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, styles} from '../styles.ts';
import {toCartItem, useCart} from '../providers/CartContext.tsx';
import {BackButton} from '../components/BackButton.tsx';
import {CartButton} from '../components/CartButton.tsx';
import {QuantityManipulate} from '../components/QuantityManipulate.tsx';
import {WishlistButton} from '../components/WishlistButton.tsx';

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

// @ts-ignore
const ProductDetailsScreen = () => {
  const [product, setProduct] = useState<any>(null);
  const route = useRoute<ProductDetailsRouteProp>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const {productId} = route.params;
  const {addToCart, isInCart} = useCart();
  const quantityInCart = isInCart(productId);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.error(error));
  }, [productId]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  const handleAddToCart = () => {
    addToCart(toCartItem(product));
  };

  // Calculate discounted price
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  // Render stars based on rating
  const renderStars = () => {
    const roundedRating = Math.floor(product.rating);
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(
          <Icon key={i} name="star" size={20} color={colors.sunglow} />,
        );
      } else {
        stars.push(
          <Icon key={i} name="star-outline" size={20} color={colors.sunglow} />,
        );
      }
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <BackButton />
        <CartButton color={colors.darkGunmetal} />
      </View>

      <Text style={styles.h1_regular}>{product.brand}</Text>
      <Text style={styles.h1_bold}>{product.title}</Text>

      <View style={styles.rowContainer}>
        {renderStars()}
        <Text style={styles.b1_regular}> {product.rating} Stars</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={product.images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.productImage} />
          )}
          onMomentumScrollEnd={e => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x /
                e.nativeEvent.layoutMeasurement.width,
            );
            setActiveImageIndex(index);
          }}
        />

        <View style={styles.indicatorContainer}>
          {product.images.map((_: any, index: React.Key | null | undefined) => (
            <View
              key={index}
              style={[
                styles.indicator,
                activeImageIndex === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>
        <WishlistButton
          productId={productId}
          style={styles.wishlistButtonRight}
        />
      </View>

      <View style={styles.rowContainer}>
        <Text style={[styles.h3_bold, styles.textPrimary]}>
          ${discountedPrice}
        </Text>
        <Text style={[styles.label_regular, styles.textRounded]}>
          ${product.discountPercentage}% OFF
        </Text>
      </View>

      <View style={styles.buttons}>
        {quantityInCart === 0 ? (
          <TouchableOpacity style={styles.button1} onPress={handleAddToCart}>
            <Text style={styles.textPrimary}>Add To Cart</Text>
          </TouchableOpacity>
        ) : (
          <QuantityManipulate productId={productId} />
        )}
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.textSecondary}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.b1_semi_bold}>Details</Text>
      <Text style={styles.b2_regular}>{product.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
