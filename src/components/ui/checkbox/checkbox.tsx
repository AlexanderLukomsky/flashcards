import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
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
  containerClassName?: string;
};

export type CheckboxProps = BaseCheckboxProps &
  Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, keyof BaseCheckboxProps>;

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    {
      onCheckedChange,
      checked,
      className,
      disabled,
      label,
      htmlFor,
      containerClassName,
      ...restProps
    }: CheckboxProps,
    forwardRef,
  ) => (
    <label
      htmlFor={htmlFor}
      className={clsx(style.label, containerClassName, { [style.label_disabled]: disabled })}
    >
      <RadixCheckbox.Root
        onCheckedChange={onCheckedChange}
        className={clsx(style.root, className)}
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
