// RN-related
import { Link, SplashScreen, Stack, useRouter } from 'expo-router';
import {
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

// Custom Components
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';
import useStore from '@/store/store';
import { useCallback } from 'react';
import { COLORS } from '@/constants';

export default function NotFoundScreen() {
  const router = useRouter();

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
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>
          Oops! This screen doesn’t exist.
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          We can’t find the page you’re looking for. It might have been moved or
          deleted.
        </ThemedText>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/home')}
        >
          <ThemedText style={styles.primaryButtonText}>Go to Home</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </AnimationWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  primaryButton: {
    backgroundColor: COLORS.primary, // Primary: Strong vibrant button color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
