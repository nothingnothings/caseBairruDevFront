// React-related
import React, { useCallback, useEffect, useState } from 'react';

// RN-related
import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { SplashScreen } from 'expo-router';
import { usePathname } from 'expo-router/build/hooks';

// Zustand-related
import useStore from '@/store/store';

// Custom Components
import { COLORS, SIZES, icons, images } from '@/constants';
import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';
import LocaleDetailsCard from '@/components/localeDetails/LocaleDetailsCard/LocaleDetailsCard';

// Types
import { LocaleDetail } from '@/types/locale/detail';

const image = require('@/assets/images/paper-texture.png');

const appURLEndpoint = process.env.EXPO_PUBLIC_APP_URL;

const LocaleDetails = () => {
  // Route-related
  const pathname = usePathname(); // Gets the full path, e.g., "/locales/1"
  const segments = pathname.split('/'); // Split the path into segments
  const id = segments[segments.length - 1]; // Get the last segment (e.g., "1")

  // Zustand store
  const token = useStore((state) => state.token);
  const isLoading = useStore((state) => state.isLoading);

  // Local state
  const [locale, setLocale] = useState<LocaleDetail | null>(null);
  const [isLoadingLocale, setIsLoadingLocale] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchLocaleDetails = useCallback(async () => {
    try {
      setIsLoadingLocale(true);
      const response = await fetch(`${appURLEndpoint}/locales/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });
      const jsonResponse = await response.json();

      if (response.ok && jsonResponse.success) {
        setLocale(jsonResponse.data);
      } else {
        Alert.alert(
          'Error',
          jsonResponse.message || 'Failed to fetch locale details.'
        );
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching locale details.');
    } finally {
      setIsLoadingLocale(false);
      setRefreshing(false);
    }
  }, [id, token]);

  useEffect(() => {
    fetchLocaleDetails();
  }, [fetchLocaleDetails]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchLocaleDetails();
  }, [fetchLocaleDetails]);

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

  if (isLoadingLocale) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (!locale) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text>No data found for this locale.</Text>
      </View>
    );
  }
  return (
    <AnimationWrapper onLayout={onLayoutRootView}>
      {/* Parent view wrapping everything */}
      <View
        style={{
          flex: 1,
          padding: SIZES.xxxLarge,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Background image with absolute positioning */}
        <ImageBackground
          source={image}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1, // Ensures it's behind the content
          }}
          resizeMode="stretch"
        />

        {/* Locale details card */}
        <LocaleDetailsCard
          locale={locale}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </AnimationWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.xxxLarge,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocaleDetails;
