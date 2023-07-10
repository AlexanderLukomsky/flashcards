import { ReactNode, ReactElement, cloneElement } from 'react';
import { Typography } from '../typography';
import style from './checkbox.module.scss';
import { CheckboxProps } from '.';

export type CheckboxControlLabelProps = {
  control: ReactNode;
  label: string;
  htmlFor?: string;
  disabled?: boolean;
};

export const CheckboxControlLabel = ({
  control,
  label,
  htmlFor,
  disabled,
}: CheckboxControlLabelProps) => (
  <label
    className={`${style.label}${disabled ? ` ${style.label_disabled}` : ''}`}
    htmlFor={htmlFor}
  >
    {cloneElement(control as ReactElement<CheckboxProps>, { disabled })}

    <Typography variant="body2" component="span">
      {label}
    </Typography>
  </label>
);
