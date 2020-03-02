import * as React from 'react';
import Slide from '../Slide';

import { Box } from 'grommet';

export default () => (
  <Slide
    animation="zoomIn"
    background={{
      dark: true,
      image: 'url(hunt-for-the-wilderpeople.jpg)',
    }}
    components={{ h1: { props: { size: 'xlarge' } } }}
    markdownChildren={`
    # Slide 2
  `}
  >
    <Box>Shimi</Box>
  </Slide>
);
