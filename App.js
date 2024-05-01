/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './Screens/DashboardScreen/DashboardScreen';
import DrawerScreen from './Screens/DrawerScreen/DrawerScreen';
import GenderScreen from './Screens/GenderScreen/GenderScreen';
import  ProductListScreen from './Screens/ProductListScreen/ProductListScreen';
import ProductListDetail from './Screens/ProductDetailsScreen/ProductListDetails';
import CartScreen from './Screens/CartScreen/CartScreen';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown:false,
        }}>
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen name="ProductListDetail" component={ProductListDetail} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
