import React from 'react';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon.tsx';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon.tsx';
import {ThemeColours} from '../../theme/theme.ts';
import {useAppTheme} from '../../hooks/useAppTheme.ts';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColours;
  size?: number;
}

// type IconType = typeof IconRegistry;
type IconName = keyof typeof IconRegistry;

const IconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = IconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}
