// React-related
import React from 'react';

// RN-related
import { TextInput, View, Text } from 'react-native';

// Third-party
import tw from 'twrnc';

// Custom Components and Styles
import styles from './formInput.style';

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
    <View style={tw`w-full`}>
      <TextInput
        style={[
          tw`p-3 border border-gray-300 rounded-md text-base`,
          styles.input,
          error ? tw`border-red-500` : tw`border-gray-300`,
        ]}
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

export default FormInput;
