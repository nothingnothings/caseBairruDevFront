// React-related
import React from 'react';

// RN-related
import { SafeAreaView, StatusBar } from 'react-native';
import { Platform } from 'react-native';

const SafeAreaViewAndroid = ({ children }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewAndroid;
