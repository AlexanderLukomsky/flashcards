import {
  ElementType,
  ComponentPropsWithoutRef,
  useState,
  useRef,
  FocusEvent,
  MouseEvent,
} from 'react';
import style from './textfield.module.scss';
import { Typography } from '../typography';
import {
  CloseIcon,
  EyeOffOutlineIcon,
  EyeOutlineIcon,
  SearchOutlineIcon,
} from '../../../assets/icons';
import { Button } from '../button';

type InputType = 'password' | 'search' | 'text';

export type BaseTextFieldProps = {
  value?: string;
  type?: InputType;
  label?: string;
  className?: string;
  placeholder?: string;
  fullWidth?: boolean;
  onChange?: () => void;
  onClear?: () => void;
};

export type TextFieldProps<T extends ElementType> = BaseTextFieldProps &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseTextFieldProps | 'type'>;

export const TextField = <T extends ElementType = 'input'>({
  value,
  type = 'text',
  label,
  placeholder,
  fullWidth,
  onClear,
  onChange,
  ...props
}: TextFieldProps<T>) => {
  const { id, onFocus, onBlur, onClick, onMouseDown, ...restProps } = props;

  const initialInputType = type === 'password' ? 'password' : 'text';

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputType, setInputType] = useState<InputType>(initialInputType);
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isLeave, setIsLeave] = useState(false);

  const styleVariantType = type === 'search' ? type : inputType;

  const activeClassName = isActive ? ` ${style.active}` : '';

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event);

    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(event);

    if (!isLeave) return;

    setIsFocused(false);
    setIsActive(false);
  };

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    if (onClick) onClick(event);

    setIsActive(true);
  };

  const handleMouseDown = (event: MouseEvent<HTMLInputElement>) => {
    if (onMouseDown) onMouseDown(event);

    setIsActive(true);
  };

  const handleMouseEnter = () => {
    setIsLeave(false);
  };
  const handleMouseLeave = () => {
    setIsLeave(true);
  };

  const toggleShowPassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));

    inputRef.current?.focus();
  };

  const handleClear = () => {
    if (onClear) onClear();

    inputRef.current?.focus();
  };

  return (
    <>
      <label htmlFor={id} className={style.label}>
        {label && (
          <Typography variant="body2" component="span">
            {label}
          </Typography>
        )}
      </label>

      {/* container input and icons - relative */}
      <div
        className={`${style.wrapper}${isFocused ? ` ${style.focused}` : ''}${activeClassName} ${
          style[type]
        } ${fullWidth ? ` ${style.fullWidth}` : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* container input */}
        <div className={`${style.input_container}`}>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onChange={onChange}
            ref={inputRef}
            value={value}
            type={inputType}
            className={`${style.input} ${style[styleVariantType]}`}
            placeholder={placeholder}
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
              IconStart={<CloseIcon className={`${style.icon}${activeClassName}`} />}
            />
          </div>
        )}

        {type === 'search' && (
          <SearchOutlineIcon className={`${style.icon} ${style.icon_search}${activeClassName}`} />
        )}

        {type === 'password' && (
          <div className={style.button_container}>
            <Button
              onClick={toggleShowPassword}
              variant="icon"
              IconStart={
                inputType === 'password' ? (
                  <EyeOutlineIcon className={`${style.icon}${activeClassName}`} />
                ) : (
                  <EyeOffOutlineIcon className={`${style.icon}${activeClassName}`} />
                )
              }
            />
          </div>
        )}
      </div>
    </>
  );
};
