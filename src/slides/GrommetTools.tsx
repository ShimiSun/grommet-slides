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
      animation={{
        type: 'fadeOut',
        delay: 0,
        duration: 5300,
        size: 'xlarge',
      }}
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
  <Box alignSelf="end">
    <Bubble
      color="accent-2"
      animation={{
        type: 'fadeOut',
        delay: 0,
        duration: 4000,
        size: 'xlarge',
      }}
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
  <Box
    alignSelf="start"
    animation={{
      type: 'pulse',
      delay: 2200,
      duration: 15000,
      size: 'large',
    }}
  >
    <Bubble color="accent-3">
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
  <Slide background="light-4">
    <Box direction="row" fill gap="large">
      <Mui />
      <Bootstrap />
      <Grommet />
    </Box>
  </Slide>
);
