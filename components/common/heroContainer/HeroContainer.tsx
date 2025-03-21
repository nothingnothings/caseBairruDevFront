import React from 'react';
import { View, Image } from 'react-native';

import styles from './heroContainer.style';

type HeroContainerProps = {
  imageUrl: string;
  size: number;
  children?: React.ReactNode;
};

const HeroContainer = ({ imageUrl, size, children }: HeroContainerProps) => {
  return (
    <View
      style={
        (styles.heroContainer,
        {
          width: size,
          height: size,
        })
      }
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.heroImage}
        resizeMode="cover"
      />
      {children}
    </View>
  );
};

export default HeroContainer;
