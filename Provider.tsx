import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ProviderWrapper = (props: any) => {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default ProviderWrapper;
