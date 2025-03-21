import { Dimensions, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  carousel: {
    width,
    maxHeight: 225,
  },
  cardContainer: {
    maxWidth: width,
    height: 225,
  },
});

export default styles;
