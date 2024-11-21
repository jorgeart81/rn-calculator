import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';

interface Props {
  backgroundColor?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  label: string;
  onPress: () => void;
}

const CalculatorButton = ({
  backgroundColor = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  label,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 160 : 72,
      })}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : Colors.textPrimary,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
