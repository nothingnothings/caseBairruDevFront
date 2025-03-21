// React-related
import React, { useEffect, useState } from 'react';

// RN-related
import { View, Text } from 'react-native';
import * as Device from 'expo-device';

// Third-party
import tw from 'twrnc';

// Custom Components and styles
import Form from '@/components/common/form/Form';
import Layout from '@/components/common/layout/Layout';

// Helper functions:
import { register } from '@/utils/auth';

export default function RegisterScreen() {
  return (
    <Layout>
      <Form isSignup={true} />
    </Layout>
  );
}
