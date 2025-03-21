// RN-related
import { StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.xxxLarge,
    paddingBottom: SIZES.xxxLarge,
    // padding: SIZES.large,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    width: '100%', // Make sure the container spans full width
    flexWrap: 'wrap', // Allow items to wrap when screen is smaller
  },
  accountBtn: {
    flex: 1, // Allow cards to scale
    maxWidth: '75%', // Limit card size to 45% of the screen width
    marginHorizontal: SIZES.xSmall, // Provide some space between cards
  },
  accountBtnCard: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: SIZES.xLarge,
    // padding: SIZES.xxxLarge, // Increase padding to make card content bigger
    marginTop: SIZES.large, // Increase top margin for card
    paddingBottom: SIZES.xxxxLarge,
    paddingTop: SIZES.medium,
  },
  icon: {
    // width: '75%',
    height: '100%',
  },
  questionText: {
    fontSize: SIZES.large,
    color: COLORS.lightDark,
    fontFamily: 'DMRegular',
    textAlign: 'center',
  },
  cardText: {
    color: COLORS.lightDark,
    fontSize: SIZES.large,
    fontFamily: 'DMMedium',
    textAlign: 'center',
    marginTop: SIZES.xLarge
  },
});

export default styles;
