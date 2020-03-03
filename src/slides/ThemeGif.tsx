import * as React from 'react';
import Slide from '../Slide';
import themeGif from '../images/themeGif.gif';
import { Box, Image } from 'grommet';

export default () => (
  <Slide background="dark-1" animation="zoomIn">
    <Box height="xxlarge" width="xxlarge">
      <Image src={themeGif} fit="contain" />
    </Box>
  </Slide>
);
