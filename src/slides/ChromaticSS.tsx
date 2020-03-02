import * as React from 'react';
import Slide from '../Slide';
import chromaticGif from '../images/chromatic.gif';
import { Box, Image } from 'grommet';
import { RangeInput } from '@bit/grommet.grommet.range-input';

export default () => (
  <Slide
    background="dark-1"
    animation="zoomIn"
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    <Box height="xxlarge" width="xxlarge">
      <Image src={chromaticGif} fit="contain" />
    </Box>
    <RangeInput value={8} min={0} max={10} step={1} onChange={() => {}} />
  </Slide>
);
