import { regex } from './regex';

export class BuildNumber {
  private static _number?: string;
  private static _isDecimal = false;
  private static hasDecimalPoint = false;

  static get numberBuilt() {
    return this._number;
  }

  static get isDecimal() {
    return this._isDecimal;
  }

  static setNumberBuilt(value: string) {
    if (isNaN(Number(value)))
      throw new Error('Invalid value: must be a number.');

    this._number = value;
    this.decimalValidation(this._number);
  }

  static addDigit(digit: string): void {
    // Allow only a single digit.
    if (digit.length !== 1)
      throw new Error('The entry must be a single digit.');

    // Ensure the digit is numeric
    if (!regex.isNumeric.test(digit))
      throw new Error('Invalid digit: must be a number.');

    if (!this._number) {
      this._number = digit;
      return;
    }

    if (this._number.startsWith('0') && !this.hasDecimalPoint)
      this.removeLeadingZeros();

    this._number += digit;
    this.decimalValidation(this._number);
  }

  static makeDecimal(): void {
    if (this.hasDecimalPoint) return;

    if (!this._number || this._number === '0') this.addDigit('0');

    this._number += '.';
    this.hasDecimalPoint = true;
  }

  static reset() {
    this._number = undefined;
    this._isDecimal = false;
    this.hasDecimalPoint = false;
  }

  private static removeLeadingZeros(): void {
    this._number = this._number?.replace(/^0+/, '');
  }

  private static decimalValidation(number: string) {
    const lastDigit = number.at(-1);

    this.hasDecimalPoint = number.includes('.');
    this._isDecimal = this.hasDecimalPoint && lastDigit !== '0';
  }
}
