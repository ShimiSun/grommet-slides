import * as React from 'react';
import Slide from '../Slide';

import { Stack } from 'grommet';
import { Confetti } from '../components/Confetti';

export default () => (
  <Stack fill>
    <Slide
      background="dark-2"
      animation="slideDown"
      components={{ h1: { props: { size: 'large' } } }}
      markdownChildren={`
    # thank you
  `}
    />
    <Confetti />
  </Stack>
);
