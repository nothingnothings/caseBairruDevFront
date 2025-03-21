import React, { useState } from 'react';
import { Alert } from 'react-native';
import Layout from '@/components/common/layout/Layout';
import Form from '@/components/common/form/Form';
import { useSession } from '@/context/ctx';

const apiUrl = process.env.EXPO_PUBLIC_BACKEND_API;

console.log(apiUrl, 'THE APPURL');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/;
    return regex.test(password);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Senha inválida',
        'A senha deve conter pelo menos 10 caracteres, uma letra maiúscula, um número e um caractere especial.'
      );
      return;
    }

    // login(email, password);
  };

  return (
    <Layout>
      <Form isSignup={false} />
    </Layout>
  );
};

export default LoginScreen;
