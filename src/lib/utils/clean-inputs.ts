export default function cleanInputs(inputs: HTMLInputElement[]) {
  inputs.forEach((input) => {
    input.value = "";
  });
}