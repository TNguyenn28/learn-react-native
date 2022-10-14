import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firstScreen from './components/firstScreen';
import secondScreen from './components/secondScreen';
import thirdScreen from './components/thirdScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="alignContent" component={firstScreen} />
      <Tab.Screen name="position" component={secondScreen} />
      <Tab.Screen name="justifyContent" component={thirdScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}