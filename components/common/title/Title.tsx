// React-related
import React from 'react';

// RN-related
import { Text } from 'react-native';

// Third-party
import tw from 'twrnc';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <Text
      style={[
        tw`text-3xl font-bold text-center text-gray-800 mb-8`,
        {
          fontFamily: 'DMMedium',
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default Title;
