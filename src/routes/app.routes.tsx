import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screen/Home';
import { Passwords } from '../screen/Passwords';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='passwords'
        component={Passwords}
      />

    </Navigator>
  );
}
