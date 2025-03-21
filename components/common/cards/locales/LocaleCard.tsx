// React-related
import React from 'react';

// RN-related
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Custom Components and Styles
import styles from './localeCard.style';

// Types
import { LocaleCard as LocaleCardType } from '@/types/locale/card';

interface LocaleCardProps {
  locale: LocaleCardType;
  handleNavigate: () => void;
}

// Helper Functions for Card Styling:
const getTypeBadgeStyle = (type: string) => {
  let backgroundColor;

  switch (type) {
    case 'shopping':
      backgroundColor = '#FF4500'; // Bright orange-red
      break;
    case 'restaurant':
      backgroundColor = '#8A2BE2'; // Vivid purple
      break;
    case 'bistro':
      backgroundColor = '#D2691E'; // Chocolate brown
      break;
    case 'market':
      backgroundColor = '#1E90FF'; // Dodger blue
      break;
    case 'landmark':
      backgroundColor = '#32CD32'; // Vibrant green
      break;
    default:
      backgroundColor = '#2F2F2F'; // Suave black
      break;
  }

  return [styles.typeBadge, { backgroundColor }];
};

const getTypeOutlineStyle = (type: string) => {
  let borderColor;

  switch (type) {
    case 'shopping':
      borderColor = '#FF4500'; // Bright orange-red
      break;
    case 'restaurant':
      borderColor = '#8A2BE2'; // Vivid purple
      break;
    case 'bistro':
      borderColor = '#D2691E'; // Chocolate brown
      break;
    case 'market':
      borderColor = '#1E90FF'; // Dodger blue
      break;
    case 'landmark':
      borderColor = '#32CD32'; // Vibrant green
      break;
    default:
      borderColor = '#2F2F2F'; // Suave black
  }

  return { borderColor, borderWidth: 2, borderRadius: 8 }; // Add faint outline with rounded corners
};

const LocaleCard = ({ locale, handleNavigate }: LocaleCardProps) => {
  const outlineStyle = getTypeOutlineStyle(locale.type);

  const maxLength = 15; // Set the maximum number of characters

  // Truncate the string if it exceeds maxLength
  const truncatedLocaleName =
    locale.name.length > maxLength
      ? locale.name.substring(0, maxLength) + '...'
      : locale.name;

  return (
    <TouchableOpacity
      style={[styles.container, outlineStyle]}
      onPress={handleNavigate}
    >
      {/* Left Column for Image and Text */}
      <View style={styles.leftColumn}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: locale.image_url_1 || 'https://via.placeholder.com/150',
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.centerColumn}>
        <View style={styles.nameContainer}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {truncatedLocaleName}
          </Text>
        </View>
        <Text style={styles.location}>
          {locale.city}, {locale.state}
        </Text>
        <Text style={styles.address} numberOfLines={2}>
          {locale.address}
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={getTypeBadgeStyle(locale.type)}>
          {locale.type.charAt(0).toUpperCase() + locale.type.slice(1)}
        </Text>
        <View>
          {locale.has_tabistore_item && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>Tabistore Available</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LocaleCard;
