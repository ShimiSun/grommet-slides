import * as React from 'react';
import Slide from '../Slide';
import StorybookGif from '../images/storybook.gif';

import { Image } from 'grommet';

export default () => (
  <Slide
    background="dark-1"
    animation="zoomIn"
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    <Image src={StorybookGif} fit="contain" />
  </Slide>
);
