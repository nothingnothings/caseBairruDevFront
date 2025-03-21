// React-related
import React from 'react';

// Custom Components and styles
import Form from '@/components/common/form/Form';
import Layout from '@/components/common/layout/Layout';

export default function RegisterScreen() {
  return (
    <Layout>
      <Form isSignup={true} />
    </Layout>
  );
}
