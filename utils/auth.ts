import { saveToken } from '@/services/tokenService';
import { AppState } from '@/types/appState/appState';
import { LoginData } from '@/types/auth/login';
import { RegisterData } from '@/types/auth/register';

import axios from 'axios';
import { router } from 'expo-router';

const appURLEndpoint = process.env.EXPO_PUBLIC_APP_URL || '';

//  * REGISTER-RELATED:

// List of keys to check in order
const keysToCheck = [
  'email',
  'password',
  'confirmPassword',
  'tabibitoName',
  'companyName',
  'companyIndustry',
  'localeName',
  'localeType',
  'localeAddress',
  'localeZipcode',
  'localeCountry',
  'localeState',
  'localeCity',
  'localePhone',
  'localeImageUrl1',
  'localeImageUrl2',
  'localeWebsiteUrl',
  'localeDescription',
];

export interface RegisterFunction {
  (
    data: RegisterData,
    setMessage: AppState['setMessage'],
    setError: AppState['setError'],
    setUser: AppState['setUser'],
    setIsLoggedIn: AppState['setIsLoggedIn']
  ): void;
}

export const register: RegisterFunction = async (
  {
    email,
    password,
    confirmPassword,
    deviceName,
    tabibitoName,
    companyName,
    companyIndustry,
    localeName,
    localeType,
    localeAddress,
    localeZipcode,
    localeCountry,
    localeState,
    localeCity,
    localePhone,
    localeImageUrl1,
    localeImageUrl2,
    localeWebsiteUrl,
    localeDescription,
  }: RegisterData,
  setMessage: (msg: string | null) => void,
  setError: (msg: string | null) => void,
  setUser: AppState['setUser'],
  setIsLoggedIn: AppState['setIsLoggedIn']
) => {
  if (!email || !password || !confirmPassword || !tabibitoName) {
    alert('Please fill all the required fields');
  } else {
    axios
      .post(`${appURLEndpoint}/register`, {
        email,
        password,
        confirmPassword,
        deviceName,
        tabibitoName,
        companyName,
        companyIndustry,
        localeName,
        localeType,
        localeAddress,
        localeZipcode,
        localeCountry,
        localeState,
        localeCity,
        localePhone,
        localeImageUrl1,
        localeImageUrl2,
        localeWebsiteUrl,
        localeDescription,
      })
      .then((response) => {
        if (response.data.status) {
          setMessage('Registration successful!');
          saveToken('authToken', response.data.token);
          saveToken('userId', response.data.user.id);
          setError(null);
          setUser(response.data.user);
          setIsLoggedIn(true);
          router.push('/home');
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        // Extract the "message" object from the error response
        const messages = error.response?.data?.message;
        handleErrors(messages, keysToCheck, setError);
      });
  }
};

//  * LOGIN-RELATED:

// List of keys to check in order
const loginKeysToCheck = ['email', 'password'];

export interface LoginFunction {
  (
    data: LoginData,
    setMessage: AppState['setMessage'],
    setError: AppState['setError'],
    setUser: AppState['setUser'],
    setIsLoggedIn: AppState['setIsLoggedIn']
  ): void;
}

export const login: LoginFunction = async (
  { email, password }: LoginData,
  setMessage: (msg: string | null) => void,
  setError: (msg: string | null) => void,
  setUser: AppState['setUser'],
  setIsLoggedIn: AppState['setIsLoggedIn']
) => {
  if (!email || !password) {
    alert('Please fill all the required fields');
  } else {
    axios
      .post(`${appURLEndpoint}/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          setMessage('Login successful!');
          saveToken('authToken', response.data.token);
          saveToken('userId', response.data.user.id);
          setError(null);
          setUser(response.data.user);
          setIsLoggedIn(true);
        } else {
          const messages = response.data.message;
          handleErrors(messages, loginKeysToCheck, setError);
        }
      })
      .catch((error) => {
        // Extract the "message" object from the error response
        const messages = error.response?.data?.message;
        handleErrors(messages, loginKeysToCheck, setError);
      });
  }
};

// * Error-Handling functions:

// Loop through the keys and set the first error message found
const handleErrors = (
  messages: Record<string, string[]> | string,
  keys: string[],
  setError: (msg: string) => void
) => {
  if (typeof messages != 'string')
    for (const key of keys) {
      if (messages[key]) {
        setError(messages[key][0]); // Set the first error message
        return;
      }
    }
  else {
    messages = messages.toString();
    setError(messages); // Fallback message
  }
};
