/**
 * @name CPF-Validation
 * @author Felipe Minetto<contato@felipeminetto.dev>
 * @description Check if brazilian tax documents are valid or not
 * @license BSD 3-Clause License
 */
import { clearInput, firstValidation } from './utilities';

const CPF_MAX_LENGTH = 11;

/**
 * Check if brazilian personal tax document are valid.
 * @param input String that contains masked or not document value
 * @returns true if is valid
 */
export default function isCPFValid(input: string): boolean {
  input = clearInput(input);
  if (firstValidation(input, CPF_MAX_LENGTH)) {
    return validateSum(input);
  }
  return false;
}

function validateSum(input: string) {
  const digits = input.slice(-2);
  const firstDigitSum = calculateSum(input, CPF_MAX_LENGTH - 1);
  const secondDigitSum = calculateSum(input, CPF_MAX_LENGTH);
  const firstDigit = calculateDigit(firstDigitSum).toString();
  const secondDigit = calculateDigit(secondDigitSum).toString();
  return digits[0] === firstDigit && digits[1] === secondDigit;
}

function calculateDigit(sum: number) {
  const multiplicationFactor: number = 10;
  const modFactor: number = 11;
  const result = (sum * multiplicationFactor) % modFactor;
  return result % multiplicationFactor;
}

function calculateSum(input: string, length: number) {
  let result: number = 0;
  let indexInput: number = 0;
  for (let index = length; index > 1; index--) {
    result += parseInt(input[indexInput], undefined) * index;
    indexInput++;
  }
  return result;
}
