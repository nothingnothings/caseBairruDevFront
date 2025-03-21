// RN-related
import { Link, SplashScreen, Stack, useRouter } from 'expo-router';
import {
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

// Custom Components
import AnimationWrapper from '@/components/animationWrapper/AnimationWrapper';
import { useCallback } from 'react';
import { COLORS } from '@/constants';

export default function NotFoundScreen() {
  const router = useRouter();


  return (
    <AnimationWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Oops! This screen doesn’t exist.</Text>
        <Text style={styles.subtitle}>
          We can’t find the page you’re looking for. It might have been moved or
          deleted.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.primaryButtonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>
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
