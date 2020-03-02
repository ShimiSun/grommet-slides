/* eslint-disable max-len */
import * as React from 'react';
import Slide from '../Slide';

import { Box, Text, Anchor } from 'grommet';
import { Linkedin as LinkedinOption, MailOption } from 'grommet-icons';

export default () => (
  <Slide
    animation="fadeIn"
    background="light-4"
    components={{ h1: { props: { size: 'xlarge' } } }}
  >
    {/* <Box
      round="large"
      background={{ dark: true, image: 'url(./scuba-night.jpg)' }}
    ></Box> */}
    <Box align="center" gap="medium">
      <Box border={{ color: 'white', size: 'large' }} round="full">
        <Box
          elevation="small"
          height="small"
          width="small"
          round="full"
          background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
        />
      </Box>
      <Text size="large" color="black">
        Open Source Core Developer
      </Text>
      <Text size="large" color="black">
        Community Manager at Grommet
      </Text>
      <Text size="large" color="black">
        Mother, Wife
      </Text>
      <Box
        pad={{ horizontal: 'xlarge' }}
        margin={{ vertical: 'small' }}
        border={{ color: 'grey' }}
      />
      <Anchor
        href="https://www.linkedin.com/in/shimrit-yacobi-a71a9539/"
        icon={<LinkedinOption />}
        label="Shimrit Yacobi"
        color="brand-1"
      ></Anchor>
      <Anchor
        href="https://www.linkedin.com/in/shimrit-yacobi-a71a9539/"
        icon={<MailOption />}
        label="shimrit.yacobi@hpe.com"
        color="brand-1"
      ></Anchor>
    </Box>
  </Slide>
);
