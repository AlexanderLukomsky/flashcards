import { TypographyVariant } from '.';

export const getElementType = (variant: TypographyVariant) => {
  switch (variant) {
    case 'large':
      return 'h5';
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';

    case 'subtitle1':
    case 'subtitle2':
      return 'h6';

    case 'caption':
    case 'overline':
    case 'link1':
    case 'link2':
      return 'span';

    default:
      return 'p';
  }
};
