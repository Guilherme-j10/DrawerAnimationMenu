import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Main } from './src/Main';
import { OptionsMenuProvider } from './src/context/Options';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" style="dark" />
      <OptionsMenuProvider>
        <Main />
      </OptionsMenuProvider>
    </>
  );
}