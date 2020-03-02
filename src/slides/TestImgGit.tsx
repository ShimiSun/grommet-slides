import * as React from 'react';
import Slide from '../Slide';
import github from '../images/github-snap.png';

import { Image } from 'grommet';

export default () => (
  <Slide
    background="dark-1"
    animation="zoomIn"
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    <Image src={github} fit="contain" />
  </Slide>
);
