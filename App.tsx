import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CartScreen from './screens/CartScreen';
import {CartProvider} from './providers/CartContext.tsx';
import {WishlistProvider} from './providers/WishlistContext.tsx';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {productId: number};
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <WishlistProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetailsScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </WishlistProvider>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;
