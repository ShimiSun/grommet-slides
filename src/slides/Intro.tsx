import * as React from 'react';
import Slide from '../Slide';

export default () => (
  <Slide
    background="dark-1"
    animation="slideUp"
    components={{ h1: { props: { size: 'large' } } }}
    markdownChildren={`
    # intro
    ## reactjs open source
    ## layers & tools
    ## the grommet experience
    ## live coding
  `}
  />
);
