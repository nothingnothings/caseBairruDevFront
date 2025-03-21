import React, { useState } from 'react';
import { Alert } from 'react-native';
import Layout from '@/components/common/layout/Layout';
import Form from '@/components/common/form/Form';
import { useSession } from '@/context/ctx';

const apiUrl = process.env.EXPO_PUBLIC_BACKEND_API;

const LoginScreen = () => {
  return (
    <Layout>
      <Form isSignup={false} />
    </Layout>
  );
};

export default LoginScreen;
