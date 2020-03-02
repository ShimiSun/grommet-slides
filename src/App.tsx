import * as React from 'react';
import { Grommet } from 'grommet';
import { slidesTheme } from './theme/SlidesTheme';
import { slides } from './slides';
import Viewer from './Viewer';

const App = (): JSX.Element => (
  <Grommet full theme={slidesTheme}>
    <Viewer slides={slides} />
  </Grommet>
);

export default App;
