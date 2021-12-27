/**
 * @name CPF-Validation
 * @author Felipe Minetto<contato@felipeminetto.dev>
 * @description Check if brazilian tax documents are valid or not
 * @license BSD 3-Clause License
 */
import { clearInput, firstValidation } from './utilities';

const CNPJ_DIGIT_FACTOR = 11;
const CNPJ_MAX_LENGTH = 14;


/**
 * Check if brazilian business tax document are valid.
 * @param input String that contains masked or not document value
 * @returns true if is valid
 */
export default function isCNPJValid(input: string) {
  input = clearInput(input);
  if (firstValidation(input, CNPJ_MAX_LENGTH)) {
    return validateSum(input);
  }
  return false;
}

function validateSum(input: string) {
  const digits = input.slice(-2);
  const firstSum = calculateSum(input, true);
  const secondSum = calculateSum(input, false);
  const firstDigit = calculateDigit(firstSum).toString();
  const secondDigit = calculateDigit(secondSum).toString();
  return firstDigit === digits[0] && secondDigit === digits[1];
}

function calculateDigit(sum: number) {
  if (sum < 2) {
    return 0;
  }
  return CNPJ_DIGIT_FACTOR - sum;
}

function calculateSum(input: string, isFirstDigit: boolean) {
  const length = isFirstDigit ? CNPJ_MAX_LENGTH - 2 : CNPJ_MAX_LENGTH - 1;
  let factor = isFirstDigit ? 5 : 6;
  let result = 0;
  for (let index = 0; index < length; index++) {
    result += parseInt(input[index], undefined) * factor;
    if (--factor === 1) {
      factor = 9;
    }
  }
  return result % CNPJ_DIGIT_FACTOR;
}
