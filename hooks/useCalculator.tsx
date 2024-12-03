import { useEffect, useRef, useState } from 'react';

import { BuildNumber } from '@/utils';

export enum Operator {
  Add = '+',
  Substract = '-',
  Multiply = 'x',
  Divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0');

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState<string | undefined>(undefined);

  const lastOperator = useRef<Operator>();

  useEffect(() => {
    if (lastOperator.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    console.log(BuildNumber.isDecimal);
    if (lastOperator.current) setPrevNumber(subResult.toString());
  }, [formula]);

  const buildNumber = (numberString: string) => {
    numberString == '.'
      ? BuildNumber.makeDecimal()
      : BuildNumber.addDigit(numberString);

    if (BuildNumber.numberBuilt) setNumber(BuildNumber.numberBuilt);
  };

  const signAndNumber = (value: string) => {
    const isNegative = value.startsWith('-');

    return {
      sign: isNegative ? Operator.Substract : '',
      temporalNumber:
        value.length > 1 && isNegative ? value.substring(1) : value,
    };
  };

  const clean = () => {
    setNumber('0');
    setPrevNumber(undefined);
    setFormula('0');

    lastOperator.current = undefined;

    BuildNumber.reset();
  };

  const toogleSign = () => {
    if (number.startsWith('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber(Operator.Substract + number);
  };

  const deleteDigit = () => {
    let newNumber = '0';
    const { sign, temporalNumber } = signAndNumber(number);

    if (temporalNumber.length > 1)
      newNumber = sign + temporalNumber.slice(0, -1);

    setNumber(newNumber);
    BuildNumber.setNumberBuilt(newNumber);
  };

  const setLastNumber = () => {
    const sanitizedNumber = sanitizeNumber(number);

    setPrevNumber(sanitizedNumber);
    setNumber('0');

    return sanitizedNumber;
  };

  const sanitizeNumber = (number: string, isDecimal: boolean = false) => {
    const pointIndex = number.indexOf('.');

    if (!isDecimal && pointIndex !== -1) {
      if (number.endsWith('.')) return number.slice(0, -1);
      else return number.slice(0, pointIndex);
    }

    return number;
  };

  const calculateResult = () => {
    const subResult = calculateSubResult();

    setFormula(subResult.toString());
    setPrevNumber(undefined);
    lastOperator.current = undefined;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.Add:
        return num1 + num2;

      case Operator.Substract:
        return num1 - num2;

      case Operator.Multiply:
        return num1 * num2;

      case Operator.Divide:
        const result = num1 / num2;
        return isNaN(result) ? 'Indeterminate' : result;

      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  };

  const calculateOperation = (operator: keyof typeof Operator) => {
    setLastNumber();
    if (lastOperator.current) calculateResult();
    lastOperator.current = Operator[operator];

    BuildNumber.setNumberBuilt('0');
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

    calculateOperation,
    calculateResult,
  };
};
