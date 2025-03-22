// RN-related
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

// Custom Components and styles
import AnimationWrapper from '@/components/common/wrappers/animationWrapper/AnimationWrapper';
import { COLORS } from '@/constants';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <AnimationWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Oops! Esta tela não existe.</Text>
        <Text style={styles.subtitle}>
          Não conseguimos encontrar a tela pela qual você estava procurando.
          Talvez ela tenha sido renomeada ou removida.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.primaryButtonText}>Voltar para o Dashboard</Text>
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
    backgroundColor: COLORS.primary,
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
