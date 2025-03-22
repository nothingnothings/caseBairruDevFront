import { RegisterData, RegisterFunction } from '@/types/auth/register';
import { LoginData, LoginFunction } from '@/types/auth/login';
import { Alert } from 'react-native';
import axios from 'axios';
import { UpdateUserData, UserData } from '@/types/auth/user';

const apiUrl = process.env.EXPO_PUBLIC_BACKEND_API;

export const validateSession = async (
  session: string | null
): Promise<boolean> => {
  if (!session) return false; // No session found, treat as invalid

  try {
    const response = await axios.get(`${apiUrl}/auth/validate`, {
      headers: { Authorization: `Bearer ${session}` },
    });

    console.log(response, 'THE RESPONSE');

    return response.data.isValid;
  } catch (error) {
    console.error('Session validation failed:', error);
    return false; // Session is invalid
  }
};

export const register: RegisterFunction = async (
  params: RegisterData
): Promise<{
  sessionData: string | null;
  userName: string;
  userId: string | null;
}> => {
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

    return {
      sessionData: response.data.token,
      userName: response.data.user.name,
      userId: response.data.user.id,
    };
  } catch (error) {
    console.error('Cadastro falhou:', error);
    return {
      sessionData: null,
      userName: '',
      userId: null,
    };
  }
};

export const login: LoginFunction = async (
  params: LoginData
): Promise<{
  sessionData: string | null;
  userName: string;
  userId: string | null;
}> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email: params.email,
      password: params.password,
    });

    if (response.status !== 200) {
      throw new Error('Login falhou');
    }

    return {
      sessionData: response.data.token,
      userName: response.data.user.name,
      userId: response.data.user.id,
    };
  } catch (error) {
    console.error('Login falhou:', error);
    return {
      sessionData: null,
      userName: '',
      userId: null,
    };
  }
};

export const updateUserName = async (
  params: UpdateUserData,
  session: string | null
): Promise<UserData | null> => {
  try {
    const response = await axios.put(
      `${apiUrl}/auth/alterName`,
      {
        newName: params.newName,
        userId: params.userId,
      },
      {
        headers: {
          Authorization: `Bearer ${session}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('Alteração de nome falhou.');
    }

    return response.data;
  } catch (error) {
    console.error('Alteração de nome falhou:', error);
    return null;
  }
};
