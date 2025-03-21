import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

import styles from '../LocalePageCarouselStyle.style';

type PageProps = {
  item: {
    description?: string;
  };
  width: number;
};

const Description = ({ item, width }: PageProps) => {
  return (
    <View style={{ width, paddingHorizontal: '15%' }}>
      <Card style={styles.cardContainer}>
        <Text style={{ marginTop: 10 }}>{item.description}</Text>
      </Card>
    </View>
  );
};

export default Description;
