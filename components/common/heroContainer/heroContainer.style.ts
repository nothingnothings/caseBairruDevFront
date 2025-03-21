import { COLORS, SIZES } from '@/constants';
import { StyleSheet, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  heroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    width: 150,
    height: 150,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderColor: COLORS.primary,
    borderWidth: 3,
    borderRadius: 250,
  },
});

export default styles;
