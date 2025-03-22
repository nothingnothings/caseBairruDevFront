// React-related
import React from 'react';

// RN-related
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Custom Components and Styles
import { COLORS } from '@/constants';

const LinkButton = ({ isSignup }: { isSignup: boolean }) => {
  const router = useRouter();

  return (
    <View style={styles.captionContainer}>
      <Text selectable={false} style={styles.captionText} numberOfLines={1}>
        {isSignup ? 'Já tem uma conta?' : 'Ainda não possui uma conta?'}
      </Text>
      <TouchableOpacity
        style={styles.primaryStyling}
        onPress={() => router.push(isSignup ? '/login' : '/register')}
      >
        <Text
          style={styles.primaryText}
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          {isSignup ? 'Faça Login' : 'Cadastre-se'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryStyling: {
    borderColor: COLORS.primary,
    padding: 10,
    paddingLeft: 8,
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  primaryText: {
    textAlign: 'center',
    color: COLORS.primary,
    fontFamily: 'DMRegular',
    fontWeight: 'bold',
    marginTop: 1,
  },
  captionText: {
    color: COLORS.gray,
  },
});

export default LinkButton;
