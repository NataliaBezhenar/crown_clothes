import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => (
  <Group>
    <Input {...inputOptions} />
    {label && (
      <FormInputLabel shrink={inputOptions.value.length}>
        {label}
      </FormInputLabel>
    )}
  </Group>
);

export default FormInput;
