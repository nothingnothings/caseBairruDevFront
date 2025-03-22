// React-related
import React from 'react';

// RN-related
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS, SIZES } from '@/constants';

type FormButtonProps = {
  disabled: boolean;
  isSignup: boolean;
  onPress: () => void;
};

export default function FormButton({
  isSignup = false,
  onPress,
  ...props
}: FormButtonProps) {
  let { ...other } = props;

  return (
    <TouchableOpacity
      style={[
        { marginTop: props.disabled ? SIZES.large : SIZES.xxLarge },
        styles.baseButton,
        props.disabled ? styles.buttonDisabled : styles.buttonEnabled,
      ]}
      disabled={props.disabled}
      onPress={onPress}
    >
      <Text
        style={props.disabled ? styles.buttonTextDisabled : styles.buttonText}
      >
        {isSignup ? 'Cadastrar' : 'Entrar'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    letterSpacing: 0.5,
  },
  buttonEnabled: {
    backgroundColor: COLORS.primary,
  },
  buttonDisabled: {
    backgroundColor: COLORS.lightGray,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'DMRegular',
  },
  buttonTextDisabled: {
    color: COLORS.darkGray,
    fontSize: 16,
    fontFamily: 'DMRegular',
  },
});
