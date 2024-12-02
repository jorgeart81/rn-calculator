import { SafeAreaView, View } from 'react-native';

import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks';
import { globalStyles } from '@/styles/global-styles';

export default function CalculatorApp() {
  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    deleteDigit,
    toogleSign,
    calculateOperation,
    calculateResult,
  } = useCalculator();

  return (
    <SafeAreaView style={globalStyles.calculartorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>{formula}</ThemeText>
        <ThemeText variant='h2'>
          {prevNumber == formula ? '' : prevNumber}
        </ThemeText>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='C'
          blackText
          backgroundColor={Colors.lightGray}
          onPress={clean}
        />
        <CalculatorButton
          label='+/-'
          blackText
          backgroundColor={Colors.lightGray}
          onPress={toogleSign}
        />
        <CalculatorButton
          label='del'
          blackText
          backgroundColor={Colors.lightGray}
          onPress={deleteDigit}
        />
        <CalculatorButton
          label='÷'
          backgroundColor={Colors.orange}
          onPress={() => calculateOperation('Divide')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='7' onPress={() => buildNumber('7')} />
        <CalculatorButton label='8' onPress={() => buildNumber('8')} />
        <CalculatorButton label='9' onPress={() => buildNumber('9')} />
        <CalculatorButton
          label='x'
          backgroundColor={Colors.orange}
          onPress={() => calculateOperation('Multiply')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='4' onPress={() => buildNumber('4')} />
        <CalculatorButton label='5' onPress={() => buildNumber('5')} />
        <CalculatorButton label='6' onPress={() => buildNumber('6')} />
        <CalculatorButton
          label='-'
          backgroundColor={Colors.orange}
          onPress={() => calculateOperation('Substract')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label='1' onPress={() => buildNumber('1')} />
        <CalculatorButton label='2' onPress={() => buildNumber('2')} />
        <CalculatorButton label='3' onPress={() => buildNumber('3')} />
        <CalculatorButton
          label='+'
          backgroundColor={Colors.orange}
          onPress={() => calculateOperation('Add')}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='0'
          doubleSize
          onPress={() => buildNumber('0')}
        />
        <CalculatorButton label='.' onPress={() => buildNumber('.')} />
        <CalculatorButton
          label='='
          backgroundColor={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </SafeAreaView>
  );
}
