// React-related
import React from 'react';

// RN-related
import { Text } from 'react-native';

// Third-party
import tw from 'twrnc';

type FormLabelProps = {
  text: string;
};

const FormLabel: React.FC<FormLabelProps> = ({ text }) => {
  return <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>{text}</Text>;
};

export default FormLabel;
