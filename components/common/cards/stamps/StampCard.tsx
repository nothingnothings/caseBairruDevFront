// React-related
import React from 'react';

// RN-related
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Custom Components and Styles
import { COLORS } from '@/constants';
import styles from './stampCard.style';

// Utils
import { checkImageURL } from '@/utils/image';

interface StampCardProps {
  item: {
    job_id: number;
    job_title: string;
    employer_name: string;
    employer_logo: string;
    job_country: string;
  };
  selectedJob: any;
  handleCardPress: any;
}

const StampCard = ({ item, selectedJob, handleCardPress }: StampCardProps) => {
  return (
    <TouchableOpacity
      style={
        (styles.container,
        {
          backgroundColor:
            selectedJob === item.job_id ? COLORS.primary : '#FFF',
        })
      }
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={
          (styles.logoContainer,
          {
            backgroundColor:
              selectedJob === item.job_id ? '#FFF' : COLORS.white,
          })
        }
      >
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          style={
            (styles.jobName,
            {
              color:
                selectedJob === item.job_id ? COLORS.white : COLORS.primary,
            })
          }
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StampCard;
