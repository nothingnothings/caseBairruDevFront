// React-related
import React from 'react';

// RN-related
import { View, Text, Image, StyleSheet } from 'react-native';

// Custom Components and Styles
import { SIZES, COLORS } from '@/constants';

import styles from './welcome.style';
import HeroContainer from '@/components/common/heroContainer/HeroContainer';

interface WelcomeProps {
  user: {
    avatarUrl: string;
    counter: number;
  };
}

const Welcome = ({ user }: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        {/* Avatar Image with Rounded Borders */}
        <HeroContainer imageUrl={user.avatarUrl} size={150}>
          {/* Counter on top of the image */}
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>{user.counter}</Text>
          </View>
        </HeroContainer>
      </View>
      <View style={styles.tabibitoTextContainer}>
        <Text style={styles.tabibitoText}>Your</Text>
        <Text style={styles.spanText}>Tabibito</Text>
      </View>
    </View>
  );
};

export default Welcome;
