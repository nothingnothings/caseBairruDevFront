import { LocaleDetail } from '@/types/locale/detail';

const appURLEndpoint = process.env.EXPO_PUBLIC_APP_URL;

// Helper function to format the phone number
export const formatPhoneNumber = (phoneNumber: string) => {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  if (cleanNumber.length === 10) {
    // Format to (99) 99999-9999
    return `(${cleanNumber.slice(0, 2)}) ${cleanNumber.slice(
      2,
      7
    )}-${cleanNumber.slice(7)}`;
  }
  return phoneNumber;
};

// Helper function to construct the url for the QR code
export const QRCodeValueFormatter = (locale: LocaleDetail) => {
  return `${appURLEndpoint}/locales/${locale.id}`;
};

// Helper function to get the state code from the state name
export const getStateCode = (stateName: string) => {
  if (!stateName) return '';

  // Split state name by spaces, dashes, or underscores
  const words = stateName.match(/\b\w/g);

  // If it's a single word, return the first two letters capitalized
  if (!words || words.length === 1) {
    return stateName.slice(0, 2).toUpperCase();
  }

  // Otherwise, join the first letters of each word
  return words.join('').toUpperCase();
};
