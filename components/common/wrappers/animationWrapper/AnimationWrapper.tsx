import * as Animatable from 'react-native-animatable';
import SafeAreaViewAndroid from '@/components/common/wrappers/safeAreaViewAndroid/SafeAreaViewAndroid';

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
