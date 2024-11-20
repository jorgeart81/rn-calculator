import { View, Text } from 'react-native';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <View>
      <Text>_layout</Text>
      <Slot />
    </View>
  );
}
