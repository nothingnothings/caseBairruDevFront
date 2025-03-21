// React-related
import React from 'react';

// RN-related
import { TouchableOpacity, Text, View } from 'react-native';

// Third-party
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Custom Components and Styles
import { COLORS } from '@/constants';
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
      style={props.disabled ? styles.buttonDisabled : styles.buttonEnabled}
      onPress={onPress}
    >
      <Text numberOfLines={1}>{isSignup ? 'Cadastrar' : 'Entrar'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonEnabled: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: COLORS.lightDark,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
});
