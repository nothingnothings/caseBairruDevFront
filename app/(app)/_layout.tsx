// RN-related
import { Redirect, Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native-paper';

// Custom Components
import Layout from '@/components/common/wrappers/layout/Layout';

// Context
import { useSession } from '@/context/ctx';

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
