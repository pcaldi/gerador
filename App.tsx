import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <Routes />
        <StatusBar hidden />
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}

