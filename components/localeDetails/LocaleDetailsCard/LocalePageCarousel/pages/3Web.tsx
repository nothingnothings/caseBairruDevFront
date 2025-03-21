import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

import styles from '../LocalePageCarouselStyle.style';
import QRCodeComponent from '@/components/common/qrcode/QRCode';

type PageProps = {
  item: {
    website_url?: string;
    qrcode?: string;
  };
  width: number;
};

const Web = ({ item, width }: PageProps) => {
  return (
    <View style={{ width, paddingHorizontal: '10%' }}>
      <Card style={styles.cardContainer}>
        <Text style={{ marginTop: 10 }}>{item.website_url}</Text>
        <QRCodeComponent
          value={item.qrcode!}
          size={150}
          color="#000"
          backgroundColor="#fff"
        />
      </Card>
    </View>
  );
};

export default Web;

{
  /* <Card style={styles.card}>
<View style={styles.titleContainer}>
  <Icon
    size={24}
    style={[
      styles.localeIcon,
      {
        backgroundColor: getTypeBadgeStyle(locale.type).backgroundColor,
      },
    ]}
    name={getTypeIcon(locale.type)}
  />
  <Text style={styles.titleText} numberOfLines={1}>
    {locale.name}
  </Text>
</View>

<Card.Content style={{ height: '100%' }}>
  <Card.Cover
    source={{ uri: locale.image_url_1 }}
    style={styles.cardImage}
  />

  <View style={styles.detailsContainer}>
    <View style={styles.detailsWrapper}>
      <View style={styles.flagContainer}>
        <CountryFlag countryCode={locale.country} />
      </View>
      <Text style={styles.cityAndStateText}>
        {locale.city}, {getStateCode(locale.state)}
      </Text>
    </View>
    <Text
      style={[styles.typeBadge, getTypeBadgeStyle(locale.type) as any]}
    >
      <View style={styles.badgeContainer}>
        {locale.type.charAt(0).toUpperCase() + locale.type.slice(1)}
      </View>
    </Text>
  </View>

  <GestureDetector gesture={swipeGesture}>
    <Animated.View
      style={[specialStyles.carouselContainer, animatedStyle]}
    >
      {PAGES.map((_, index) => (
        <View key={index} style={specialStyles.page}>
          {index === 0 && (
            // <Text style={styles.description}>{locale.description}</Text>
            <>
              <Text style={styles.infoText}>
                📍 {locale.city}, {locale.state}
              </Text>
              <Text style={styles.infoText}>🏠 {locale.address}</Text>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(locale.website_url)}
              >
                🌐 Website
              </Text>
            </>
          )}
          {index === 1 && (
            <>
              <Text style={styles.infoText}>
                📍 {locale.city}, {locale.state}
              </Text>
              <Text style={styles.infoText}>🏠 {locale.address}</Text>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(locale.website_url)}
              >
                🌐 Website
              </Text>
            </>
          )}
          {index === 2 && (
            <QRCodeComponent
              value={QRCodeValueFormatter(locale)}
              size={150}
              color="#000"
              backgroundColor="#fff"
            />
          )}
        </View>
      ))}
    </Animated.View>
  </GestureDetector>
</Card.Content>
</Card> */
}
