import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from './Navigator';

export default function App() {
  return (
    <>
       <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
       />
   <Navigator />
    </>
  );
}

