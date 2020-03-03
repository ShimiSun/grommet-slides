import * as React from 'react';
import Slide from '../Slide';
import wcag from '../images/wcag.png';

import { Image } from 'grommet';

export default () => (
  <Slide background="dark-1" animation="zoomIn">
    <Image src={wcag} fit="contain" />
  </Slide>
);
