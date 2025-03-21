// React-related
import React from 'react';

// RN-related
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  DimensionValue,
} from 'react-native';

// Custom Components and Styles
import { SIZES } from '@/constants';
import styles from './screenheader.style';

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue;
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={[
          {
            width: dimension,
            height: dimension,
            borderRadius: SIZES.small / 1.25,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
