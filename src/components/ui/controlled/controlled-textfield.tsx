import { useController, FieldValues, UseControllerProps } from 'react-hook-form';
import { TextField, TextFieldProps } from '../textfield';

type ControlledTextfieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValue'
> &
  Omit<TextFieldProps, 'value' | 'onChange'>;

export const ControlledTextfield = <T extends FieldValues>({
  name,
  control,
  ...restProps
}: ControlledTextfieldProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return <TextField value={value} onChange={onChange} {...restProps} />;
};
