import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparing';
import DeliveryScreen from './screens/DeliveryScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen
          name="Cart"
          options={{presentation: 'modal'}}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPreparing"
          options={{presentation: 'fullScreenModal'}}
          component={OrderPreparing}
        />
        <Stack.Screen
          name="Delivery"
          options={{presentation: 'fullScreenModal'}}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
