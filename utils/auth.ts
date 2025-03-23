import { RegisterData, RegisterFunction } from '@/types/auth/register';
import { LoginData, LoginFunction } from '@/types/auth/login';
import axios, { AxiosError } from 'axios';
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

    return response.data.isValid;
  } catch (error) {
    console.error('A validação da sessão falhou: ', error);
    return false; // Session is invalid
  }
};

export const register: RegisterFunction = async (
  params: RegisterData,
  setError: (message: string | null) => void
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
      // Mensagem genérica de erro:
      console.log(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.',
        response.data
      );
      setError(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.'
      );
      return {
        sessionData: null,
        userName: '',
        userId: null,
      };
    }

    return {
      sessionData: response.data.token,
      userName: response.data.user.name,
      userId: response.data.user.id,
    };
  } catch (error: any) {
    if (error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError('Cadastro falhou: ' + error);
    }
    return {
      sessionData: null,
      userName: '',
      userId: null,
    };
  }
};

export const login: LoginFunction = async (
  params: LoginData,
  setError: (message: string | null) => void
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
      // Mensagem genérica de erro:
      console.log(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.',
        response.data
      );
      setError(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.'
      );
      return {
        sessionData: null,
        userName: '',
        userId: null,
      };
    }

    return {
      sessionData: response.data.token,
      userName: response.data.user.name,
      userId: response.data.user.id,
    };
  } catch (error: any) {
    if (error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError('Login falhou: ' + error);
    }
    return {
      sessionData: null,
      userName: '',
      userId: null,
    };
  }
};

export const fetchUserName = async (
  session: string | null,
  userId: string | null,
  setError: (message: string | null) => void
): Promise<string | null> => {
  try {
    const response = await axios.get(`${apiUrl}/auth/user/${userId}`, {
      headers: { Authorization: `Bearer ${session}` },
    });

    if (response.status !== 200) {
      // Mensagem genérica de erro:
      console.log(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.',
        response.data
      );
      setError(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.'
      );
    }

    return response.data.name;
  } catch (error: any) {
    if (error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError('A busca pelo usuário falhou: ' + error);
    }
    return null;
  }
};

export const updateUserName = async (
  params: UpdateUserData,
  session: string | null,
  setError: (message: string | null) => void
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
      // Mensagem genérica de erro:
      console.log(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.',
        response.data
      );
      setError(
        'Houve um problema ao processar sua requisição. Por favor, tente novamente.'
      );
      return null;
    }

    return response.data;
  } catch (error: any) {
    if (error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError('Alteração de nome falhou: ' + error);
    }
    return null;
  }
};
