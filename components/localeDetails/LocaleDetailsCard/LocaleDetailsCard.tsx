import React, { useState } from 'react';
import { Linking, View, StyleSheet, Dimensions, Animated } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import styles from './localeDetailsCard.style';
import { LocaleDetail } from '@/types/locale/detail';
import QRCodeComponent from '@/components/common/qrcode/QRCode';
import Icon from 'react-native-vector-icons/FontAwesome6';
import CountryFlag from '@/components/common/countryFlag/CountryFlag';
import SafeAreaViewAndroid from '@/components/safeAreaViewAndroid/SafeAreaViewAndroid';
import { getTypeBadgeStyle, getTypeIcon } from '@/utils/style';
import { QRCodeValueFormatter, getStateCode } from '@/utils/misc';
import { SIZES } from '@/constants';
import LocalePageCarousel from './LocalePageCarousel/LocalePageCarousel';
import HeroContainer from '@/components/common/heroContainer/HeroContainer';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type LocaleDetailsCardProps = {
  locale: LocaleDetail;
  refreshing: boolean;
  onRefresh: () => void;
};

const PAGES = [1, 2, 3];

const LocaleDetailsCard = ({ locale }: LocaleDetailsCardProps) => {
  const translateX = useSharedValue(0);

  const [currentPage, setCurrentPage] = useState(0);

  // Improved Gesture
  const swipeGesture = Gesture.Pan().onEnd((event) => {
    if (event.translationX < -50 && currentPage < PAGES.length - 1) {
      runOnJS(setCurrentPage)(currentPage + 1);
      translateX.value = withSpring(-screenWidth * (currentPage + 1));
    } else if (event.translationX > 50 && currentPage > 0) {
      runOnJS(setCurrentPage)(currentPage - 1);
      translateX.value = withSpring(-screenWidth * (currentPage - 1));
    } else {
      translateX.value = withSpring(-screenWidth * currentPage);
    }
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const formattedLocaleDetailPages = [
    {
      id: 1,
      description: locale.description,
    },
    {
      id: 2,
      address: locale.address,
      zipcode: locale.zipcode,
      phone: locale.phone,
    },
    {
      id: 3,
      website_url: locale.website_url,
      qrcode: QRCodeValueFormatter(locale),
    },
  ];

  return (
    <View style={specialStyles.container}>
      <HeroContainer imageUrl={locale.image_url_1} size={250}></HeroContainer>
      <LocalePageCarousel localeDetailArray={formattedLocaleDetailPages} />
    </View>
  );
};

export default LocaleDetailsCard;

const specialStyles = StyleSheet.create({
  container: {
    height: screenHeight / 1.4,
    alignItems: 'center',
    overflow: 'hidden', // Ensures only one page is visible
  },
  carouselContainer: {
    flexDirection: 'row',
    width: screenWidth * PAGES.length,
    overflow: 'hidden',
  },
  page: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
