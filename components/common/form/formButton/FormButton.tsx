// React-related
import React from 'react';

// RN-related
import { TouchableOpacity, Text } from 'react-native';

// Custom Components and Styles
import { COLORS, SIZES } from '@/constants';
import { StyleSheet } from 'react-native';

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
      <Text style={styles.buttonText}>{isSignup ? 'Cadastrar' : 'Entrar'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    // marginTop: SIZES.xxLarge,
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
    backgroundColor: COLORS.lightDark,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'DMRegular',
  },
});
