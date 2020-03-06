import * as React from 'react';
import { Chart } from '@bit/grommet.grommet.chart';

import { Heading, ResponsiveContext } from 'grommet';
import Slide from '../Slide';

export default () => (
  <Slide background="dark-1" animation="slideUp">
    <Heading>My bit + Grommet chart</Heading>
    <ResponsiveContext.Consumer>
      {size => (
        <Chart
          type={size === 'large' ? 'line' : size === 'small' ? 'point' : 'bar'}
          values={[
            { label: 'First', value: [0, 60] },
            { label: 'Second', value: [1, 20] },
            { label: 'Third', value: [2, 40] },
            { label: 'Fourth', value: [3, 50] },
            { label: 'Fifth', value: [4, 10] },
          ]}
        />
      )}
    </ResponsiveContext.Consumer>
  </Slide>
);
