// import { Try } from 'expo-router/build/views/Try';
import React, { ReactNode, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const appURLEndpoint = process.env.EXPO_PUBLIC_APP_URL || '';

// Auth configuration
const config = {
  loginUrl: `${appURLEndpoint}/sanctum/token`,
  logoutUrl: `${appURLEndpoint}/api/logout`,
  userUrl: `${appURLEndpoint}/user`,
};

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
