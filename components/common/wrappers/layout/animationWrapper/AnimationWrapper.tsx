// RN-related
import * as Animatable from 'react-native-animatable';

// Custom Components
import SafeAreaViewAndroid from '@/components/common/wrappers/layout/animationWrapper/safeAreaViewAndroid/SafeAreaViewAndroid';

type AnimationWrapperProps = {
  children: React.ReactNode;
  onLayout?: any;
};

const AnimationWrapper = ({ children, onLayout }: AnimationWrapperProps) => {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={600} // Fade animation duration
      style={{ flex: 1 }}
    >
      <SafeAreaViewAndroid onLayout={onLayout}>{children}</SafeAreaViewAndroid>
    </Animatable.View>
  );
};

export default AnimationWrapper;
