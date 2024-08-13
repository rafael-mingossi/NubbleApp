import {ThemeColours} from '../../theme/theme.ts';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme.ts';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColours;
}

export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}
