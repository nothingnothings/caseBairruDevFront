import { Redirect, Stack } from 'expo-router';

import { useSession } from '../../context/ctx';
import { ActivityIndicator } from 'react-native-paper';
import Layout from '@/components/common/wrappers/layout/Layout';
import { StatusBar } from 'expo-status-bar';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <Layout>
        <ActivityIndicator size="large" color="#0000ff" />
      </Layout>
    );
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarHidden: true,
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
    </>
  );
}
