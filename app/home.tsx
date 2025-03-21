// React-related
import { useCallback, useState } from 'react';

// RN-related
import {
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { SplashScreen, Stack } from 'expo-router';

// Zustand-related
import useStore from '@/store/store';

// Custom Components
import { COLORS, icons, images, SIZES } from '@/constants';
import { Locales, ScreenHeaderBtn, Welcome } from '@/components';
import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';
const image = require('@/assets/images/paper-texture.png');

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const HomePage = () => {
  const token = useStore((state) => state.token);
  const isLoading = useStore((state) => state.isLoading);

  const onLayoutRootView = useCallback(async () => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  if (isLoading) {
    return null; // Return nothing if fonts are still loading
  }

  // If loading, show an ActivityIndicator
  if (isLoading || token === '') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <AnimationWrapper onLayout={onLayoutRootView}>
      <ImageBackground
        source={image}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        resizeMode="stretch"
      >
        <View style={styles.content}>
          <Welcome
            user={{
              avatarUrl: 'https://picsum.photos/640/480',
              counter: 123,
            }}
          />
          <Locales />
        </View>
      </ImageBackground>
    </AnimationWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  content: {
    flex: 1,
    padding: SIZES.medium,
  },
});

export default HomePage;
