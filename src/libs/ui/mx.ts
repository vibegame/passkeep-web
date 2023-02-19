import { styled } from '@mui/material/styles';

const createPrimitive = <T extends keyof JSX.IntrinsicElements>(tag: T) =>
  styled(tag)``;

export const mx = {
  header: createPrimitive('div'),
  div: createPrimitive('div'),
  span: createPrimitive('span'),
  form: createPrimitive('form'),
  img: createPrimitive('img'),
  main: createPrimitive('main'),
  label: createPrimitive('label'),
  aside: createPrimitive('aside'),
  button: createPrimitive('button'),
  text: createPrimitive('text'),
  g: createPrimitive('g'),
  li: createPrimitive('li'),
};
