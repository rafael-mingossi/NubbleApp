import {Theme, ThemeColours} from '../../theme/theme.ts';
import {useTheme} from '@shopify/restyle';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColours;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} />;
}
