import { regex } from './regex';

export class BuildNumber {
  private static number?: string;
  private static isDecimal = false;

  static get numberBuilt() {
    return this.number;
  }

  static setNumberBuilt(value: string) {
    this.isDecimal = value.includes('.');
    this.number = value;
  }

  static addDigit(digit: string): void {
    // Allow only a single digit.
    if (digit.length !== 1)
      throw new Error('The entry must be a single digit.');

    // Ensure the digit is numeric
    if (!regex.isNumeric.test(digit))
      throw new Error('Invalid digit: must be a number.');

    if (!this.number) {
      this.number = digit;
      return;
    }

    if (this.number.startsWith('0') && !this.isDecimal)
      this.removeLeadingZeros();

    this.number += digit;
  }

  static makeDecimal(): void {
    if (this.isDecimal) return;

    if (!this.number || this.number === '0') this.addDigit('0');

    this.number += '.';
    this.isDecimal = true;
  }

  static reset() {
    this.number = undefined;
    this.isDecimal = false;
  }

  private static removeLeadingZeros(): void {
    this.number = this.number?.replace(/^0+/, '');
  }
}
