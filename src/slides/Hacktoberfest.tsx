import * as React from 'react';
import Slide from '../Slide';
import hacktoberfest from '../images/hacktoberfest.png';

import { Image } from 'grommet';

export default () => (
  <Slide background="dark-1" animation="zoomIn">
    <Image src={hacktoberfest} fit="contain" />
  </Slide>
);
