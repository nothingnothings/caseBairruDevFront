import { RegisterData, RegisterFunction } from '@/types/auth/register';
import { LoginData, LoginFunction } from '@/types/auth/login';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const register: RegisterFunction = async (params: RegisterData) => {
  // Simula a resposta de uma API
  const fakeToken = 'fake-jwt-token';
  const fakeUserName = params.email.split('@')[0]; // Apenas um exemplo

  await AsyncStorage.setItem('userToken', fakeToken);
  await AsyncStorage.setItem('userName', fakeUserName);

  Alert.alert('Login realizado com sucesso!');
};

export const login: LoginFunction = async (params: LoginData) => {
  try {
    const response = await axios.post('/login', {
      email: params.email,
      password: params.password,
    });

    if (response.status !== 200) {
      throw new Error('Login falhou');
    }

    return response.data.token;
  } catch (error) {
    console.error('Login falhou:', error);
    return null;
  }
};
