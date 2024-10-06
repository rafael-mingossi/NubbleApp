import React, {ComponentProps} from 'react';
import {Pressable} from 'react-native';

import {
  ArrowLeftIcon,
  SearchIcon,
  ArrowRightIcon,
  BookmarkIcon,
  BookmarkFillIcon,
  BellIcon,
  CameraIcon,
  ChatIcon,
  ChatOnIcon,
  CheckRoundIcon,
  CheckIcon,
  CameraClick,
  FlashOffIcon,
  FlashOnIcon,
  BellOnIcon,
  CommentIcon,
  HeartIcon,
  HeartFillIcon,
  HomeFillIcon,
  ProfileFillIcon,
  HomeIcon,
  ProfileIcon,
  MessageIcon,
  SettingsIcon,
  TrashIcon,
  EyeOffIcon,
  EyeOnIcon,
  NewPostIcon,
  ErrorRoundIcon,
  ChevronRightIcon,
  MessageRoundIcon,
} from '@assets';

import {useAppTheme} from '@hooks';
import {ThemeColours} from '@theme';

export interface IconBase {
  size?: number;
  color?: string;
  fillColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColours;
  fillColor?: ThemeColours;
  size?: number;
  onPress?: () => void;
}

// type IconType = typeof IconRegistry;
type IconName = keyof typeof iconRegistry;

const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookmarkIcon,
  bookmarkFill: BookmarkFillIcon,
  camera: CameraIcon,
  cameraClick: CameraClick,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  checkRound: CheckRoundIcon,
  errorRound: ErrorRoundIcon,
  comment: CommentIcon,
  chevronRight: ChevronRightIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  messageRound: MessageRoundIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

export function Icon({
  name,
  onPress,
  color = 'backgroundContrast',
  fillColor = 'background',
  size,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const iconProps: ComponentProps<typeof SVGIcon> = {
    size,
    fillColor: colors[fillColor],
    color: colors[color],
  };

  if (onPress) {
    return (
      <Pressable testID={name} onPress={onPress} hitSlop={10}>
        <SVGIcon {...iconProps} />
      </Pressable>
    );
  }

  return <SVGIcon {...iconProps} />;
}
