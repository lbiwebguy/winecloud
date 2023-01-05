import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WineCloudTheme } from './theme';

const ProviderWrapper = (props: any) => {
  return (
    <NativeBaseProvider theme={WineCloudTheme}>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default ProviderWrapper;
