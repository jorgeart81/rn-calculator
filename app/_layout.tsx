import { Platform, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from '@/styles/global-styles';

const isAndroid = Platform.OS === 'android';

if (isAndroid) NavigationBar.setBackgroundColorAsync('black');

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={globalStyles.background}>
      <Slot />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}
