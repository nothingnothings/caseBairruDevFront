// RN-related
import { StyleSheet, TextStyle } from 'react-native';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

// Custom Components and Styles
import { COLORS, FONT, SIZES } from '../../../constants';

interface TabStyleProps {
  activeJobType: string;
  item: string;
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: SIZES.medium,
    color: 'black',
    marginBottom: SIZES.small,
    marginLeft: SIZES.small,
    fontFamily: 'DMRegular',
    alignSelf: 'flex-start',
  },
  heroSection: {
    position: 'relative',
    marginTop: SIZES.xxxSmall,
    marginBottom: SIZES.xxSmall,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.xLarge,
    width: 150, 
    height: 150,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderColor: COLORS.primary,
    borderWidth: 3,
    borderRadius: 250, 
  },
  counterContainer: {
    position: 'absolute',
    bottom: -16,
    backgroundColor: '#ffffff',
    borderColor: COLORS.primary,
    borderWidth: 2.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    elevation: 3,
    alignSelf: 'center',
  },
  counterText: {
    color: '#2f2f2f',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
  tabibitoTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SIZES.xxxxSmall,
  },
  spanText: {
    fontFamily: 'DMMedium',
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  tabibitoText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    fontFamily: 'DMRegular',
  },
});

// Move the dynamic style definitions outside of StyleSheet.create
export const getTabStyle = ({
  activeJobType,
  item,
}: TabStyleProps): ViewStyle => ({
  paddingVertical: SIZES.small / 2,
  paddingHorizontal: SIZES.small,
  borderRadius: SIZES.medium,
  borderWidth: 1,
  borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
});

export const getTabTextStyle = ({
  activeJobType,
  item,
}: TabStyleProps): TextStyle => ({
  fontFamily: FONT.medium,
  color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
});

export default styles;
