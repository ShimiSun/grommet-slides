import { Box, BoxProps, Markdown, MarkdownProps } from 'grommet';
import * as React from 'react';

export interface IProps {
  align?: BoxProps['align'];
  animation?: BoxProps['animation'];
  background?: BoxProps['background'];
  children?: React.ReactNode;
  components?: MarkdownProps['components'];
  justify?: BoxProps['justify'];
  markdownChildren?: string | undefined;
}

const Slide: React.FC<IProps> = ({
  align,
  animation,
  background,
  children,
  markdownChildren,
  components,
  justify,
  ...rest
}) => (
  <Box fill background={background} pad="large" animation="fadeIn">
    <Box
      {...rest}
      fill
      animation={
        typeof animation === 'object'
          ? animation
          : { type: animation, size: 'large' }
      }
      align={align}
      justify={justify}
    >
      {markdownChildren && (
        <Markdown components={components}>
          {markdownChildren && markdownChildren.replace(/^[^\S\r\n]+/gm, '')}
        </Markdown>
      )}
      {children}
    </Box>
  </Box>
);

Slide.defaultProps = {
  align: 'center',
  animation: 'fadeIn',
  background: undefined,
  components: undefined,
  justify: 'center',
};

export default Slide;
