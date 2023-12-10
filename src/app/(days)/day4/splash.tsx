import { useRef } from 'react';
import { Stack } from 'expo-router';
import LottieView from 'lottie-react-native';
import { View, Text, Button } from 'react-native';
import AnimatedSplashScreen from '@/components/AnimationSplashScreen';

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return <AnimatedSplashScreen />;
};

export default AnimationScreen;
