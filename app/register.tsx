// React-related
import React, { useEffect, useState } from 'react';

// RN-related
import { View, Text } from 'react-native';
import * as Device from 'expo-device';

// Zustand-related
import useStore from '@/store/store';

// Third-party
import tw from 'twrnc';

// Custom Components and styles
import Form from '@/components/common/form/Form';
import Layout from '@/components/common/layout/Layout';
import AccountTypeSelector from '@/components/accountTypeSelector/AccountTypeSelector'; // Import new component

// Helper functions:
import { register } from '@/utils/auth';

export default function RegisterScreen() {
  // Zustand store
  const selectedAccountType = useStore((state) => state.selectedAccountType);
  const setSelectedAccountType = useStore(
    (state) => state.setSelectedAccountType
  );

  return (
    <Layout>
      <View style={selectedAccountType !== null ? tw`w-3/5` : null}>
        {selectedAccountType === null ? (
          // Show Account Type Selector if no account type is selected
          <AccountTypeSelector onSelect={setSelectedAccountType} />
        ) : (
          // Show the registration form if account type is selected
          <Form
            multiPage={selectedAccountType === 'company'}
            signup={true}
            deviceName={Device.modelName as string}
            onSubmit={register}
            userType={selectedAccountType} // Pass the selected type to Form
          />
        )}
      </View>
    </Layout>
  );
}
