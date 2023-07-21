import * as Slider from '@radix-ui/react-slider';
import style from './style.module.scss';
import './styles.css';

export type RangeProps = {
  value: number[];
  max?: number;
  step?: number;
  onValueChange: (value: number[]) => void;
} & Slider.SliderProps;

export const Range = ({ value, max = 100, step = 1, onValueChange, ...props }: RangeProps) => (
  <Slider.Root
    className={style.root}
    value={value}
    max={max}
    step={step}
    onValueChange={onValueChange}
    {...props}
  >
    <Slider.Track className={style.track}>
      <Slider.Range className="SliderRange" />
    </Slider.Track>

    <Slider.Thumb className="SliderThumb" aria-label="min-value" />
    <Slider.Thumb className="SliderThumb" aria-label="max-max-value" />
  </Slider.Root>
);
