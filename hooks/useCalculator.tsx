import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  substract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0');

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState<string | undefined>(undefined);

  const lastOperator = useRef<Operator>();

  useEffect(() => {
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString == '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.' || number.includes('.')) {
        return setNumber(number + numberString);
      }

      if (numberString == '0' && !number.includes('.')) return;
      if (numberString != '0') return setNumber(numberString);
    }

    setNumber(number + numberString);
  };

  const clean = () => {
    setNumber('0');
    setPrevNumber(undefined);
    setFormula('0');

    lastOperator.current = undefined;
  };

  const toogleSign = () => {
    if (number.startsWith('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber(Operator.substract + number);
  };

  const deleteDigit = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (temporalNumber.startsWith('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1)
      return setNumber(currentSign + temporalNumber.slice(0, -1));

    setNumber('0');
  };

  const setLastNumber = () => {
    const pointIndex = number.indexOf('.');

    // if it's a integer
    if (pointIndex === -1) {
      setPrevNumber(number);
    } else if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      const decimal = number.slice(pointIndex + 1);

      if (
        decimal.length === 0 ||
        decimal.split('').some((char) => char !== '0')
      ) {
        setPrevNumber(number);
      } else {
        setPrevNumber(number.slice(0, pointIndex));
      }
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperator.current = Operator.divide;
  };

  return {
    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
    clean,
    deleteDigit,
    toogleSign,

    divideOperation,
  };
};
