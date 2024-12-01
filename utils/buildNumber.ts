export class BuildNumber {
  private static number?: string;
  private static isDecimal = false;

  static get numberBuilt() {
    return this.number;
  }

  static addDigit(digit: string): void {
    // Ensure the digit is numeric
    if (!/\d/.test(digit)) throw new Error('Invalid digit: must be a number');

    if (!this.number) {
      this.number = digit;
      return;
    }

    if (this.number.startsWith('0') && !this.isDecimal)
      this.removeLeadingZeros();

    this.number += digit;
  }

  static makeDecimal(): void {
    if (this.number?.includes('.')) return;

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
