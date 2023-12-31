import { SVGProps, Ref, forwardRef } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="var(--color-light-100)"
    ref={ref}
    {...props}
  >
    <path
      fill="evenodd"
      d="m8.41 7 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L7 5.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42L5.59 7l-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L7 8.41l4.29 4.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L8.41 7Z"
    />
  </svg>
);
export const CloseIcon = forwardRef(SvgComponent);
