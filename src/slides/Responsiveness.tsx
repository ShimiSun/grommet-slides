import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    animation="slideRight"
    background="accent-2"
    components={{ h1: { props: { size: 'xlarge' } } }}
    markdownChildren={`
    # responsiveness
  `}
  />
);
