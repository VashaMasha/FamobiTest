import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import FiltersScreen from '../components/FiltersScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const animationDisabled = {
  animationEnabled: false,
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions} initialRouteName="HomeScreen">
    <Stack.Screen name="Home" component={HomeScreen} options={animationDisabled} />
    <Stack.Screen name="Filters" component={FiltersScreen} options={animationDisabled} />
  </Stack.Navigator>
);

export default MainStackNavigator;
