// React-related
import React from 'react';

// RN-related
import { TouchableOpacity, Text, View } from 'react-native';

// Third-party
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Custom Components and Styles
import { COLORS } from '@/constants';

type FormButtonProps = {
  isSignup: boolean;
  isArrow: boolean;
  text?: string;
  icon: IconProp | null;
  primary: boolean;
  onPress: () => void;
  isVisible: boolean;
  style?: any;
  userType?: 'tabibito' | 'company' | 'none';
};

export default function FormButton({
  isSignup = false,
  isArrow = false,
  text,
  icon,
  primary,
  onPress,
  isVisible,
  style,
  userType,
  ...props
}: FormButtonProps) {
  let { ...other } = props;

  const primaryStyling = {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: userType === 'tabibito' || 'none' ? 40 : 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
  };

  // const secondaryStyling = tw`border-blue-500 px-2 py-3`;
  const secondaryStyling = {
    borderColor: COLORS.secondary,
    padding: 10,
    paddingLeft: 8,
  };

  // const primaryText = tw`text-center text-white font-bold`;
  const primaryText = {
    color: COLORS.white,
    fontFamily: 'DMRegular',
    textWrap: 'nowrap',
  };
  // const secondaryText = tw`text-center text-blue-500 font-bold`;
  const secondaryText = {
    textAlign: 'center',
    color: COLORS.secondary,
    fontFamily: 'DMRegular',
    fontWeight: 'bold',
    marginTop: 1,
  };

  const captionContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  };
  // const caption = tw`text-center text-gray-500 font-bold`;
  const caption = {
    color: '#6B7280',
  };

  const arrow = {
    outlineStyle: 'none',
    paddingVertical: 10,
    paddingHorizontal: 20,
  };

  return (
    isVisible && (
      <>
        {!isArrow && primary && (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={
                text
                  ? ([primary ? primaryStyling : secondaryStyling] as any)
                  : null
              }
              onPress={onPress}
            >
              <Text
                style={
                  text ? ([primary ? primaryText : secondaryText] as any) : null
                }
                numberOfLines={1}
              >
                {text}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {!isArrow && !primary && (
          <View style={captionContainer as any}>
            <Text selectable={false} style={[caption]} numberOfLines={1}>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
            </Text>
            <TouchableOpacity
              style={
                text
                  ? ([primary ? primaryStyling : secondaryStyling] as any)
                  : null
              }
              onPress={onPress}
            >
              <Text
                style={
                  text ? ([primary ? primaryText : secondaryText] as any) : null
                }
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {text}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {isArrow && (
          <TouchableOpacity onPress={onPress}>
            <FontAwesomeIcon icon={icon!} size={28} style={arrow as any} />
          </TouchableOpacity>
        )}
      </>
    )
  );
}
