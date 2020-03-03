import * as React from 'react';
import Slide from '../Slide';

import { Stack } from 'grommet';
import { Magic } from '../components/Magic';

export default () => (
  <>
    <Stack fill>
      <Slide
        background="light-4"
        animation="slideUp"
        components={{ h1: { props: { size: 'large' } } }}
        markdownChildren={`
    # community
  `}
      />
      <Magic />
    </Stack>
  </>
);
