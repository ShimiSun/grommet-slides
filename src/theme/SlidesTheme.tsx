import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import { ThemeType } from 'grommet/themes';

export const slidesTheme: ThemeType = deepMerge(hpe, {
  global: {
    colors: {
      'brand-1': '#7D4CDB',
    },
  },
});
