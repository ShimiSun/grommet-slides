import * as React from 'react';
import { Box, Image, Text, BoxProps } from 'grommet';
import { Grommet as GrommetIcon } from 'grommet-icons';

import Slide from '../Slide';

const BubbleText = ({ children }: any) => <Text size="xlarge">{children}</Text>;

interface IProps {
  animation?: BoxProps['animation'];
  color: BoxProps['background'];
  children: React.ReactNode;
}

const Bubble = ({ color, children, animation }: IProps) => (
  <Box
    align="center"
    alignContent="center"
    animation={animation}
    background={color}
    border={{ color: 'white', size: 'medium' }}
    gap="medium"
    height="medium"
    pad="medium"
    round="full"
    width="medium"
  >
    {children}
  </Box>
);
const MuiLogo = () => (
  <Image
    src="https://www.muicss.com/static/favicons/icon-192x192.png"
    alt="MUI"
    width="100"
    height="100"
  />
);
const BootstrapLogo = () => (
  <Image
    src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
    alt="Bootstrap logo"
    width="72"
    height="72"
  />
);

const Mui = () => (
  <Box alignSelf="start">
    <Bubble
      color="accent-1"
      animation={[
        {
          type: 'slideUp',
          delay: 0,
          duration: 300,
          size: 'xlarge',
        },
        {
          type: 'pulse',
          delay: 4200,
          duration: 4500,
          size: 'medium',
        },
      ]}
    >
      <BubbleText size="large">yarn, lerna</BubbleText>
      <BubbleText>lint, prettier</BubbleText>
      <BubbleText>typescript</BubbleText>
      <BubbleText>vrtest, enzyme, karma</BubbleText>
      <MuiLogo />
    </Bubble>
  </Box>
);

const Bootstrap = () => (
  <Box alignSelf="start">
    <Bubble
      color="accent-2"
      animation={[
        {
          type: 'slideDown',
          delay: 0,
          duration: 4000,
          size: 'xlarge',
        },
        {
          type: 'pulse',
          delay: 4000,
          duration: 6500,
          size: 'medium',
        },
      ]}
    >
      <BubbleText>yarn, npm</BubbleText>
      <BubbleText>scss, sass</BubbleText>
      <BubbleText>lint</BubbleText>
      <BubbleText>karma, popper</BubbleText>
      <BootstrapLogo />
    </Bubble>
  </Box>
);

const Grommet = () => (
  <Box alignSelf="end" margin={{ bottom: 'xlarge' }}>
    <Bubble
      color="accent-3"
      animation={[
        {
          type: 'slideDown',
          delay: 200,
          duration: 5500,
          size: 'xlarge',
        },
        {
          type: 'pulse',
          delay: 5500,
          duration: 15000,
          size: 'large',
        },
      ]}
    >
      <BubbleText size="large">yarn, npm</BubbleText>
      <BubbleText>styled-components</BubbleText>
      <BubbleText>lint, prettier, typescript</BubbleText>
      <BubbleText>jest, react-testing-lib</BubbleText>
      <BubbleText>storybook, chromatic</BubbleText>
      <GrommetIcon size="large" color="brand-1" />
    </Bubble>
  </Box>
);
export default () => (
  <Slide animation="slideUp" background="light-4">
    <Box direction="row" fill gap="large">
      <Mui />
      <Grommet />
      <Bootstrap />
    </Box>
  </Slide>
);
