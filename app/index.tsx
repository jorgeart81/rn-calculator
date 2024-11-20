import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native';

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculartorContainer}>
      <ThemeText variant='h1'>50 x 50</ThemeText>
      <ThemeText variant='h2'>2500</ThemeText>
    </View>
  );
}
