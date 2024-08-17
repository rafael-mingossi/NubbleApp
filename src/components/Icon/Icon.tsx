import React from 'react';
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
}

export interface IconProps {
  name: IconName;
  color?: ThemeColours;
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
  size,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}
