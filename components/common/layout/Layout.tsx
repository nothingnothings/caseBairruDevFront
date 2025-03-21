// React-related
import React from 'react';

// RN-related
import { View, StatusBar } from 'react-native';

// Custom Components
import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';
import { StyleSheet } from 'react-native';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <AnimationWrapper>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>{children}</View>
    </AnimationWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
