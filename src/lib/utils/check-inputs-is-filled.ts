export default function checkInputsIsFilled (inputs: HTMLInputElement[]) {
  return inputs.every((input) => input.value !== "");
}