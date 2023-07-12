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
  onClear?: () => void;
};

export type TextFieldProps<T extends ElementType> = BaseTextFieldProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseTextFieldProps | 'type'>;

export const TextField = <T extends ElementType = 'input'>({
  value,
  type = 'text',
  label,
  fullWidth,
  onClear,
  ...props
}: TextFieldProps<T>) => {
  const { id, onFocus, onBlur, onClick, onMouseDown, ...restProps } = props;

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

  return (
    <>
      {label && (
        <Typography htmlFor={id} variant="body2" component="label" className={style.label}>
          {label}
        </Typography>
      )}

      {/* container input and icons - relative */}
      <div className={`${style.wrapper} ${style[type]} ${fullWidth ? ` ${style.fullWidth}` : ''}`}>
        {/* container input */}
        <div className={`${style.input_container}`}>
          <input
            ref={inputRef}
            value={value}
            type={(isPasswordType && isViewPassword) || isSearchType ? 'text' : type}
            className={`${style.input} ${style[type]}`}
            id={id}
            {...restProps}
          />
        </div>

        {/* buttons and icon */}
        {type === 'search' && !!value && (
          <div className={style.button_container}>
            <Button
              onClick={handleClear}
              variant="icon"
              IconStart={<CloseIcon className={`${style.icon}`} />}
            />
          </div>
        )}

        {type === 'search' && (
          <SearchOutlineIcon className={`${style.icon} ${style.icon_search}`} />
        )}

        {isPasswordType && (
          <div className={style.button_container}>
            <Button
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
    </>
  );
};
