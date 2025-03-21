import { StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f7f3f9',
    borderWidth: 2,
    borderColor: COLORS.lightDark,
    padding: SIZES.small,
    marginTop: SIZES.xxSmall,
    // marginBottom: SIZES.small,
    // borderRadius: SIZES.small,
    fontSize: SIZES.medium,
  },
});

export default styles;
