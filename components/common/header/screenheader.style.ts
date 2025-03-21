// RN-related
import { StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
