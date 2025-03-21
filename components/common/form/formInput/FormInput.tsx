// React-related
import React from 'react';

// RN-related
import { TextInput, View, Text, StyleSheet } from 'react-native';

// Third-party
import tw from 'twrnc';

// Custom Components and Styles
import { COLORS, SIZES } from '@/constants';

type FormInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  style?: object;
  multiline?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  multiline = false,
}) => {
  return (
    <View>
      <TextInput
        style={[styles.input, error ? styles.errorBorder : tw`border-gray-300`]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={5}
      />
      {!!error && <Text style={tw`text-red-500 text-xs mt-1`}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f7f3f9',
    borderWidth: 2,
    borderRadius: SIZES.small,
    borderColor: COLORS.lightDark,
    paddingHorizontal: SIZES.xxLarge,
    paddingVertical: SIZES.small,
    marginTop: SIZES.xxSmall,
    fontSize: SIZES.medium,
  },
  errorBorder: {
    borderColor: '#ff0000',
  },
  neutralBorder: {
    borderColor: '#E0E0E0',
  },
});

export default FormInput;
