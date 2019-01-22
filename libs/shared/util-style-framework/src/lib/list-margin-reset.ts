import { css } from 'emotion';

export const listMarginResetStyles = {
  marginTop: '0.5rem',
  marginLeft: '1rem',
  li: {
    marginBottom: '0.5rem',
  },
};

export const listMarginResetClass = css({
  'ul, ol': {
    ...listMarginResetStyles,
  },
});
