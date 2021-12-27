/**
 * @name CPF-Validation
 * @author Felipe Minetto<contato@felipeminetto.dev>
 * @description Check if brazilian tax documents are valid or not
 * @license BSD 3-Clause License
 */
const notNumberRegex = new RegExp(/[^0-9]/, 'g');
const notEqualRegex = new RegExp(/\b(\d)\1+\b/);

export function clearInput(input: string) {
  return input.replace(notNumberRegex, '');
}

export function firstValidation(input: string, expectedLength: number): boolean {
  return !isRepeated(input) && checkLength(input, expectedLength);
}

function isRepeated(input: string) {
  return notEqualRegex.test(input);
}

function checkLength(input: string, expectedLength: number) {
  return input.length === expectedLength;
}
