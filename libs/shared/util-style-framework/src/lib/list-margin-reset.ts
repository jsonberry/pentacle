import { css } from 'emotion';
import { rem } from './rem';

export const listMarginResetStyles = {
  marginTop: rem(12),
  marginLeft: rem(24),
  li: {
    marginBottom: rem(12),
  },
};

export const listMarginResetClass = css({
  'ul, ol': {
    ...listMarginResetStyles,
  },
});
