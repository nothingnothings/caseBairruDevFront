import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '@/constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'center', // Keep it centered horizontally
    // margin: SIZES.xxxxLarge, // Add some margin on the card
    padding: SIZES.large, // Add some padding on the card
  },
  titleContainer: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SIZES.large,
    paddingTop: SIZES.xxxLarge,
  },
  localeIcon: {
    color: '#fff',
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.lightDark,
  },
  // card: {
  //   width: '80%', // Card is smaller than full screen
  //   alignSelf: 'center',
  //   backgroundColor: '#fff',
  //   borderRadius: 10,

  //   // overflow: 'hidden', // Ensures no weird expansion
  // },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  cardSubtitle: {
    fontSize: 14,
    color: COLORS.secondary,
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
  card: {
    width: '30%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  cardImage: {
    marginTop: SIZES.xxxLarge,
    marginBottom: SIZES.xxSmall,
    // height: 300, // Larger image size
    // width: 400, // Larger image size
    minHeight: 200, // Larger image size
    minWidth: 200, // Larger image size
    borderRadius: 150, // Make it round
    // resizeMode: 'contain', // Ensure the image fits without distortion
    alignSelf: 'center', // Center the image horizontally
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: SIZES.xxxxLarge,
    paddingHorizontal: SIZES.xxxLarge,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 16,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
  },
  link: {
    color: COLORS.primary,

    marginTop: 4,
  },
  // Badge Styling:
  type: {
    fontSize: 14,
    color: '#666',
  },
  detailsContainer: {
    paddingHorizontal: 48,
    marginHorizontal: SIZES.large,
    marginTop: SIZES.small,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SIZES.xSmall,
  },
  flagContainer: {},
  badgeContainer: {
    alignSelf: 'flex-end',
  },
  cityAndStateText: {
    alignSelf: 'center',
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adds spacing between content and dots
    marginBottom: 15, // Keeps it visually balanced
  },
  // swiperPage: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5, // Makes it circular
    backgroundColor: '#C1C0C8', // Default inactive color (your Gray2)
    marginHorizontal: 5, // Spacing between dots
  },
  typeBadge: {
    minWidth: 40,
    paddingVertical: 5,
    marginTop: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardActions: {
    marginTop: SIZES.large,
    marginBottom: SIZES.xLarge,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Carousel-specific styles
  carouselContainer: {
    flexDirection: 'row',
    width: width * 3, // Ensures all pages fit in a row
    overflow: 'hidden',
  },
  page: {
    width,
    // height: height * 0.3, // Adjust height dynamically
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
  },
});

export default styles;
