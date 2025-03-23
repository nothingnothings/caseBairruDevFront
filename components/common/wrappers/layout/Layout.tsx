// React-related
import React from 'react';

// RN-related
import { View, StatusBar, StyleSheet } from 'react-native';

// Custom Components
import AnimationWrapper from '@/components/common/wrappers/layout/animationWrapper/AnimationWrapper';
import { useSession } from '@/context/ctx';
import CustomAlert from '../../CustomAlert/CustomAlert';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { errorMessage, setError } = useSession();

  return (
    <AnimationWrapper>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>{children}</View>
      {errorMessage && (
        <CustomAlert
          visible={!!errorMessage}
          message={errorMessage}
          onDismiss={() => setError(null)}
        />
      )}
    </AnimationWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
