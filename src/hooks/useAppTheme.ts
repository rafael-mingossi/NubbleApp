import {useTheme} from '@shopify/restyle';

import {Theme} from '../theme/theme.ts';

export function useAppTheme() {
  return useTheme<Theme>();
}
