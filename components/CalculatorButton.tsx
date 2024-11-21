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
        aspectRatio: doubleSize ? undefined : '1/1',
        flex: doubleSize ? 2 : 1,
        opacity: pressed ? 0.8 : 1,
        maxWidth: doubleSize ? undefined : '21%',
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
