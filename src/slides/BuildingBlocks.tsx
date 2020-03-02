import * as React from 'react';
import Slide from '../Slide';
import { Blocks } from '../components';
export default () => (
  <Slide
    animation="slideDown"
    background="accent-1"
    components={{ h1: { props: { size: 'medium' } } }}
    justify="start"
    markdownChildren={`
    # OSS React Building Blocks
  `}
  >
    <Blocks />
  </Slide>
);
