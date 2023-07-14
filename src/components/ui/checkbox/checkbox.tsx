import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { CheckboxIcon } from './checkbox-icon';
import style from './checkbox.module.scss';
import { Typography } from '../typography';

type BaseCheckboxProps = {
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  htmlFor?: string;
};

export type CheckboxProps = BaseCheckboxProps &
  Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, keyof BaseCheckboxProps>;

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    { onCheckedChange, checked, className, disabled, label, htmlFor, ...restProps }: CheckboxProps,
    forwardRef,
  ) => (
    <label
      htmlFor={htmlFor}
      className={`${style.label}${disabled ? ` ${style.label_disabled}` : ''}`}
    >
      <RadixCheckbox.Root
        onCheckedChange={onCheckedChange}
        className={`${style.root}${className ? ` ${className}` : ''}`}
        checked={checked}
        ref={forwardRef}
        disabled={disabled}
        {...restProps}
      >
        <RadixCheckbox.Indicator className={style.indicator}>
          <CheckboxIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <Typography variant="body2" component="span">
        {label}
      </Typography>
    </label>
  ),
);

Checkbox.displayName = RadixCheckbox.Root.displayName;
