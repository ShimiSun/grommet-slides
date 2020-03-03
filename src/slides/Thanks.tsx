import * as React from 'react';
import Slide from '../Slide';

import { Stack } from 'grommet';
import { Magic } from '../components/Magic';

export default () => (
  <>
    <Stack fill>
      <Slide
        background="dark-2"
        animation="slideDown"
        components={{ h1: { props: { size: 'large' } } }}
        markdownChildren={`
    # thank you
  `}
      />
      <Magic />
    </Stack>
  </>
);
