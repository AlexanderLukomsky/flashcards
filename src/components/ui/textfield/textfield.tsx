import { ElementType, ComponentPropsWithoutRef, useRef } from 'react';
import { useToggle } from '@common/hooks';
import { CloseIcon, EyeOffOutlineIcon, EyeOutlineIcon, SearchOutlineIcon } from '@assets/icons';
import clsx from 'clsx';
import style from './textfield.module.scss';
import { Typography } from '../typography';
import { Button } from '../button';

type InputType = 'password' | 'search' | 'text';

export type BaseTextFieldProps = {
  value?: string;
  type?: InputType;
  label?: string;
  className?: string;
  isError?: boolean;
  errorMessage?: string;
  containerProps?: ComponentPropsWithoutRef<'div'>;
  onClear?: () => void;
};

export type TextFieldProps<T extends ElementType = 'input'> = BaseTextFieldProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseTextFieldProps | 'type'>;

export const TextField = <T extends ElementType = 'input'>({
  value,
  type = 'text',
  label,
  isError,
  errorMessage,
  containerProps,
  onClear,
  ...props
}: TextFieldProps<T>) => {
  const { id, disabled, ...restProps } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { value: isViewPassword, onToggle: toggleViewPassword } = useToggle();

  const isSearchType = type === 'search';
  const isPasswordType = type === 'password';

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
    <div {...containerProps}>
      {label && (
        <Typography
          htmlFor={id}
          variant="body2"
          component="label"
          className={clsx(style.label, { [style.disabled]: disabled })}
        >
          {label}
        </Typography>
      )}

      <div
        className={clsx(style.input_container, style[type], {
          [style.disabled]: disabled,
          [style.error]: isError,
        })}
      >
        <input
          disabled={disabled}
          ref={inputRef}
          value={value}
          type={(isPasswordType && isViewPassword) || isSearchType ? 'text' : type}
          className={clsx(style.input, style[type], {
            [style.not_empty]: !!value,
            [style.error]: isError,
          })}
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
              IconStart={<CloseIcon className={style.icon} />}
            />
          </div>
        )}

        {isSearchType && (
          <SearchOutlineIcon
            onClick={handleIconClick}
            className={clsx(style.icon, style.icon_search)}
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
                  <EyeOffOutlineIcon className={style.icon} />
                ) : (
                  <EyeOutlineIcon className={style.icon} />
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
