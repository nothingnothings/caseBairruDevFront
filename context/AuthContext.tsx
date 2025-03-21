import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateName: (newName: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  updateName: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Carregar o token salvo ao iniciar o app
    const loadSession = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      const storedUser = await AsyncStorage.getItem('userName');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(storedUser);
        autoLogout();
      }
    };
    loadSession();
  }, []);

  const login = async (email: string, password: string) => {
    // Simula a resposta de uma API
    const fakeToken = 'fake-jwt-token';
    const fakeUserName = email.split('@')[0]; // Apenas um exemplo

    setToken(fakeToken);
    setUser(fakeUserName);

    await AsyncStorage.setItem('userToken', fakeToken);
    await AsyncStorage.setItem('userName', fakeUserName);

    Alert.alert('Login realizado com sucesso!');
    autoLogout();
  };

  const logout = async () => {
    setToken(null);
    setUser(null);
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userName');
  };

  const updateName = async (newName: string) => {
    setUser(newName);
    await AsyncStorage.setItem('userName', newName);
  };

  const autoLogout = () => {
    setTimeout(() => {
      logout();
      Alert.alert('Sessão expirada', 'Você foi deslogado automaticamente.');
    }, 5 * 60 * 1000); // 5 minutos
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, updateName }}>
      {children}
    </AuthContext.Provider>
  );
};
