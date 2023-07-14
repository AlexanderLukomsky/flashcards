import { useController, FieldValues, Control, Path } from 'react-hook-form';
import { Checkbox, CheckboxProps } from '../checkbox';

type ControlledTextfieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  shouldUnregister?: boolean;
} & Omit<CheckboxProps, 'value' | 'onChange'>;

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  control,
  shouldUnregister,
  ...restProps
}: ControlledTextfieldProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control, shouldUnregister });

  const handleChange = onChange as (checked: boolean) => void;

  return <Checkbox checked={value} onCheckedChange={handleChange} {...restProps} />;
};
