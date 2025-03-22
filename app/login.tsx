// React-related
import React from 'react';

// Custom Components
import Layout from '@/components/common/wrappers/layout/Layout';
import Form from '@/components/form/Form';

const LoginScreen = () => {
  return (
    <Layout>
      <Form isSignup={false} />
    </Layout>
  );
};

export default LoginScreen;
