// RN-related
import { StyleSheet } from 'react-native';

// Custom Components and Styles
import { COLORS } from '@/constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Make the navbar absolute to the bottom
    bottom: 0, // Position the navbar at the bottom of the screen
    left: 0,
    right: 0,
  },
  navBar: {
    backgroundColor: COLORS.primary, // Viber-like color
    flexDirection: 'row', // Arrange icons horizontally
    alignItems: 'center', // Align items vertically
    width: '100%', // Ensures the navbar takes the full width of the screen
    paddingVertical: 16,
    fontFamily: 'DMBold',
  },
  navItem: {
    flex: 1, // Allow each item to take up equal space
    alignItems: 'center', // Center the icon and text
    justifyContent: 'center', // Ensure the content is centered vertically
    paddingHorizontal: 10, // Horizontal padding for spacing between items
  },
  navText: {
    color: 'white', // White text color
    fontSize: 14, // Smaller font size
    marginTop: 2, // Space between icon and text
    textAlign: 'center', // Ensure text is centered
    fontFamily: 'DMRegular',
  },
  activeNavText: {
    color: COLORS.secondary, // Viber-like color
  },
});

export default styles;
