import * as React from 'react';
import Slide from '../Slide';
import kevin from '../images/kevin.png';
import kevinThread from '../images/kevin-thread.png';

import { Box, Image } from 'grommet';

export default () => (
  <Slide background="dark-1" animation="zoomIn">
    <Box direction="row">
      <Image src={kevinThread} fit="contain" />
      <Image src={kevin} fit="contain" />
    </Box>
  </Slide>
);
