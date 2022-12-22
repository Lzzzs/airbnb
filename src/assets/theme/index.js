export const theme = {
  color: {
    primary: '#FF385C',
    second: '#00848A',
  },
  text: {
    primary: '#484848',
    second: '#222222',
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `,
  },
};
