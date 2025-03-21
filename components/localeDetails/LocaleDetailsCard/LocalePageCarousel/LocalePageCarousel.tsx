import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import SideSwipe from 'react-native-sideswipe';
import { Card } from 'react-native-paper';

import styles from './LocalePageCarouselStyle.style';
import Description from './pages/1Description';
import Address from './pages/2Address';
import Web from './pages/3Web';
// const data = [1, 2, 3, 4, 5];

// the following information must be displayed:

// description: string;
// address: string;
// zipcode: string;
// phone: string;
// website_url: string;

// qrcode: string;

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

type localeDetailPage = {
  id: number;
  description?: string;
  address?: string;
  zipcode?: string;
  phone?: string;
  website_url?: string;
  qrcode?: string;
};

type SweetCarouselProps = {
  localeDetailArray: localeDetailPage[];
};

const LocalePageCarousel = ({ localeDetailArray }: SweetCarouselProps) => {
  const [width, setWidth] = React.useState(Dimensions.get('window').width);

  // threshold must be calculated based on the width of the screen:
  const threshold = width / 3;

  return (
    <View style={styles.container}>
      <Text>Center Aligned</Text>
      <SideSwipe
        data={localeDetailArray}
        style={styles.carousel}
        itemWidth={width}
        threshold={threshold}
        contentOffset={0}
        renderItem={({ item }) => (
          <>
            {item.id === 1 && <Description item={item} width={width} />}
            {item.id === 2 && <Address item={item} width={width} />}
            {item.id === 3 && <Web item={item} width={width} />}
          </>
        )}
      />
    </View>
  );
};

export default LocalePageCarousel;
