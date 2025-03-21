// React-related
import React, { useState } from 'react';

// RN-related
import { View } from 'react-native';
import { deviceName } from 'expo-device';

// Third-party
import tw from 'twrnc';

// Custom Components and styles
import Form from '@/components/common/form/Form';
import Layout from '@/components/common/layout/Layout';

// Helper functions:
import { login } from '@/utils/auth';

export default function Login() {
  return (
    <Layout>
      <View style={tw`w-3/5`}>
        <Form
          deviceName={deviceName}
          multiPage={false}
          signup={false}
          onSubmit={login}
          userType="none"
        />
      </View>
    </Layout>
  );
}
