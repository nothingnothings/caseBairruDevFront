// RN-related
import { StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    boxShadow: '0px 2px 5.84px rgba(255, 255, 255, 1)',
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '70%',
    height: '70%',
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: 'DMRegular',
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
});

export default styles;
