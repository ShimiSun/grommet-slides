import React from 'react';
import { Box, Text } from 'grommet';
import { PadType } from 'grommet/utils';
import { Checkmark } from 'grommet-icons';

export const Blocks = () => (
  <Box
    animation="slideDown"
    gap="medium"
    align="center"
    margin={{ top: 'medium' }}
  >
    <Block
      pad={{ horizontal: 'xlarge', vertical: 'small' }}
      label="Package Management"
    />
    <Block
      pad={{ horizontal: 'xlarge', vertical: 'small' }}
      label="Dev Tools"
    />
    <Block
      pad={{ horizontal: 'medium', vertical: 'small' }}
      label="Testing Frameworks"
    />
    <Block pad="small" label="Deployment" />
    <Block pad="xsmall">
      <Checkmark />
    </Block>
  </Box>
);

interface BlockProps {
  label?: string;
  pad?: PadType;
  children?: React.ReactNode;
}

const Block = ({ label, pad, children }: BlockProps) => (
  <Box
    pad={pad}
    round="small"
    border={{ color: 'brand-1', size: 'small' }}
    elevation="medium"
  >
    <Text weight="bold" size="large">{label}</Text>
    {children}
  </Box>
);
