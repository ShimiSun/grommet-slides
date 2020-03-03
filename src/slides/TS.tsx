import * as React from 'react';
import Slide from '../Slide';
import typescript from '../images/typescript.png';

import { Image } from 'grommet';

export default () => (
  <Slide
    background="dark-1"
    animation="zoomIn"
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    <Image src={typescript} fit="contain" />
  </Slide>
);
