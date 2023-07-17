import { ElementType, ComponentPropsWithoutRef, useRef } from 'react';
import style from './textfield.module.scss';
import { Typography } from '../typography';
import {
  CloseIcon,
  EyeOffOutlineIcon,
  EyeOutlineIcon,
  SearchOutlineIcon,
} from '../../../assets/icons';
import { Button } from '../button';
import { useToggle } from '../../../common/hooks';

type InputType = 'password' | 'search' | 'text';

export type BaseTextFieldProps = {
  value?: string;
  type?: InputType;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onClear?: () => void;
};

export type TextFieldProps<T extends ElementType = 'input'> = BaseTextFieldProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseTextFieldProps | 'type'>;

export const TextField = <T extends ElementType = 'input'>({
  value,
  type = 'text',
  label,
  fullWidth,
  isError,
  errorMessage,
  onClear,
  ...props
}: TextFieldProps<T>) => {
  const { id, disabled, ...restProps } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { value: isViewPassword, onToggle: toggleViewPassword } = useToggle();

  const isSearchType = type === 'search';
  const isPasswordType = type === 'password';
  const disabledClassName = disabled ? ` ${style.disabled}` : '';
  const errorClassName = isError ? ` ${style.error}` : '';

  const toggleShowPassword = () => {
    inputRef.current?.focus();

    toggleViewPassword();

    const start = inputRef.current?.selectionStart ?? 0;
    const end = inputRef.current?.selectionEnd ?? 0;

    requestAnimationFrame(() => {
      inputRef.current?.setSelectionRange(start, end);
    });
  };

  const handleClear = () => {
    onClear?.();

    inputRef.current?.focus();
  };

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={`${style.wrapper} ${fullWidth ? ` ${style.fullWidth}` : ''}`}>
      {label && (
        <Typography
          htmlFor={id}
          variant="body2"
          component="label"
          className={`${style.label}${disabledClassName}`}
        >
          {label}
        </Typography>
      )}

      <div
        className={`${style.input_container} ${style[type]}${disabledClassName}${errorClassName}`}
      >
        <input
          disabled={disabled}
          ref={inputRef}
          value={value}
          type={(isPasswordType && isViewPassword) || isSearchType ? 'text' : type}
          className={`${style.input} ${style[type]}${errorClassName}${
            value ? ` ${style.not_empty}` : ''
          }`}
          id={id}
          {...restProps}
        />

        {isSearchType && !!value && (
          <div className={style.button_container}>
            <Button
              type="button"
              disabled={disabled}
              onClick={handleClear}
              variant="icon"
              IconStart={<CloseIcon className={`${style.icon}`} />}
            />
          </div>
        )}

        {isSearchType && (
          <SearchOutlineIcon
            onClick={handleIconClick}
            className={`${style.icon} ${style.icon_search}`}
          />
        )}

        {isPasswordType && (
          <div className={style.button_container}>
            <Button
              type="button"
              disabled={disabled}
              onClick={toggleShowPassword}
              variant="icon"
              IconStart={
                isViewPassword ? (
                  <EyeOffOutlineIcon className={`${style.icon}`} />
                ) : (
                  <EyeOutlineIcon className={`${style.icon}`} />
                )
              }
            />
          </div>
        )}
      </div>

      {errorMessage !== undefined && (
        <Typography className={style.errorMessage} variant="overline">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
