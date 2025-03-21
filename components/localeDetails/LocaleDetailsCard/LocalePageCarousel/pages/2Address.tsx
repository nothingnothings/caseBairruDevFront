import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

import styles from '../LocalePageCarouselStyle.style';

type PageProps = {
  item: {
    address?: string;
    zipcode?: string;
    phone?: string;
  };
  width: number;
};

const Address = ({ item, width }: PageProps) => {
  return (
    <View style={{ width, paddingHorizontal: '10%' }}>
      <Card style={styles.cardContainer}>
        <Text style={{ marginTop: 10 }}>{item.address}</Text>
        <Text style={{ marginTop: 10 }}>{item.zipcode}</Text>
        <Text style={{ marginTop: 10 }}>{item.phone}</Text>
      </Card>
    </View>
  );
};

export default Address;
