// RN-related
import { StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS, FONT, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.small,
    display: 'flex',
    flexDirection: 'row',
    gap: SIZES.medium,
    alignSelf: 'center',
  },
});

export default styles;
