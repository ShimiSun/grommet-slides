import * as React from 'react';
import Slide from '../Slide';

import { Box, Text } from 'grommet';

export default () => (
  <Slide animation="slideRight" background="light-4">
    <Box>
      <Box direction="row">
        <Box
          align="center"
          justify="center"
          width="small"
          height="small"
          background="accent-1"
        >
          <Text size="small">small</Text>
        </Box>
        <Box
          align="center"
          justify="center"
          width="small"
          height="small"
          background="accent-4"
        >
          <Text size="small">small</Text>
        </Box>
      </Box>
      <Box direction="row" margin={{ vertical: 'medium' }}>
        <Box
          align="center"
          justify="center"
          width="medium"
          height="small"
          background="accent-2"
        >
          <Text size="medium">medium</Text>
        </Box>
        <Box
          align="center"
          justify="center"
          width="medium"
          height="small"
          background="accent-1"
        >
          <Text size="medium">medium</Text>
        </Box>
      </Box>
      <Box
        width="large"
        height="small"
        background="accent-3"
        align="center"
        justify="center"
      >
        <Text size="large">large</Text>
      </Box>
    </Box>
  </Slide>
);
