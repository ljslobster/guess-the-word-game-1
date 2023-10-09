export default function passFocusInput(inputs: HTMLInputElement[], input: HTMLInputElement) {
  const inputIndex = inputs.indexOf(input);

  inputs[inputIndex + 1]?.focus();
}