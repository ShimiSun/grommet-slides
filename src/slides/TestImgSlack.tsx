import * as React from 'react';
import Slide from '../Slide';
import slack from '../images/slack-snap.png';

import { Image } from 'grommet';

export default () => (
  <Slide
    background="dark-1"
    animation="zoomIn"
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    <Image src={slack} fit="contain" />
  </Slide>
);
