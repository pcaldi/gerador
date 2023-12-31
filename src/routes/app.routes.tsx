import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screen/Home';
import { Passwords } from '../screen/Passwords';
import { Ionicons } from "@expo/vector-icons"

const { Navigator, Screen } = createBottomTabNavigator();


export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              focused ? <Ionicons name="ios-home" size={size} color="#002851" /> : <Ionicons name="ios-home-outline" size={size} color="#737373" />
            )
          },
          tabBarStyle: {
            backgroundColor: '#fffbeb',
          }
        }}
      />
      <Screen
        name='passwords'
        component={Passwords}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => {
            return (
              focused ? <Ionicons name="ios-lock-closed" size={size} color="#002851" /> : <Ionicons name="ios-lock-closed-outline" size={size} color="#737373" />
            )
          },
          tabBarStyle: {
            backgroundColor: '#fffbeb',
          }
        }}
      />

    </Navigator>
  );
}
