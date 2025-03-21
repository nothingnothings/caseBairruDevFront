import { RegisterData, RegisterFunction } from '@/types/auth/register';
import { LoginData, LoginFunction } from '@/types/auth/login';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_BACKEND_API;

export const register: RegisterFunction = async (
  params: RegisterData
): Promise<string | null> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/register`, {
      name: params.name,
      email: params.email,
      password: params.password,
      confirmPassword: params.confirmPassword,
    });

    if (response.status !== 200) {
      throw new Error('Cadastro falhou');
    }

    return response.data.token;
  } catch (error) {
    console.error('Cadastro falhou:', error);
    return null;
  }
};

export const login: LoginFunction = async (
  params: LoginData
): Promise<string | null> => {
  try {
    const response = await axios.post(
      `${apiUrl}/auth/login`,
      {
        email: params.email,
        password: params.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('Login falhou');
    }

    return response.data.token;
  } catch (error) {
    console.error('Login falhou:', error);
    return null;
  }
};
