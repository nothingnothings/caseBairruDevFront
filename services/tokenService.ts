// RN-related
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

// Third-party
import axios from 'axios';
import { UserData } from '@/types/user';

const appURLEndpoint = process.env.EXPO_PUBLIC_APP_URL;

export async function saveToken(key: string, value: string) {
  try {
    if (Platform.OS === 'web') {
      await AsyncStorage.setItem(key, value);
    } else {
      // mobile
      await SecureStore.setItemAsync(key, value.toString());
    }
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

export async function getToken(key: string) {
  try {
    if (Platform.OS === 'web') {
      const result = await AsyncStorage.getItem(key);
      if (result) {
        // check if token is valid with backend:
        const response = await axios.get(`${appURLEndpoint}/user`, {
          headers: {
            Authorization: `Bearer ${result}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.data.error) {
          await AsyncStorage.clear();
          return {
            token: null,
            user: null,
          };
        }

        return {
          token: result,
          user: response.data as UserData,
        };
      }
    } else {
      const result = await SecureStore.getItemAsync(key);
      if (result) {
        return {
          token: result,
          user: null,
        };
      }
    }
  } catch (error) {
    await AsyncStorage.clear();
    throw error;
  }
}

export async function clearToken() {
  try {
    if (Platform.OS === 'web') {
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('userId');
    } else {
      // mobile
      await SecureStore.deleteItemAsync('authToken');
      await SecureStore.deleteItemAsync('userId');
    }
  } catch (error) {
    console.error('Error clearing data:', error);
  }
}
