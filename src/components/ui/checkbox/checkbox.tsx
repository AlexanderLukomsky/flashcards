import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckboxIcon } from './checkbox-icon';
import style from './checkbox.module.scss';

type BaseCheckboxProps = {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
};

export type CheckboxProps = BaseCheckboxProps &
  Omit<RadixCheckbox.CheckboxProps, 'onCheckedChange' | keyof BaseCheckboxProps>;

export const Checkbox = ({ onChange, checked, className, ...restProps }: CheckboxProps) => (
  <RadixCheckbox.Root
    onCheckedChange={onChange}
    className={`${style.root}${className ? ` ${className}` : ''}`}
    checked={checked}
    {...restProps}
  >
    <RadixCheckbox.Indicator className={style.indicator}>
      <CheckboxIcon />
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
);
