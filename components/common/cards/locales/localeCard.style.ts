// RN-related
import { StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS, SIZES } from '@/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SIZES.xLarge,
    borderRadius: 8,
    backgroundColor: COLORS.lightPink,
    marginTop: SIZES.medium,
    marginBottom: SIZES.xxxxSmall,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '100%',
  },
  leftColumn: {
    flex: 1,
    flexDirection: 'column',
    marginRight: SIZES.medium,
  },
  centerColumn: {
    flex: 2,
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  imageContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  type: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  address: {
    fontSize: 12,
    color: '#999',
  },
  badgeContainer: {
    marginTop: 5,
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  typeBadge: {
    alignSelf: 'flex-end',
    minWidth: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 5,
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  badgeText: {},
});

export default styles;
