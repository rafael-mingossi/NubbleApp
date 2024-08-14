import React from 'react';
import {ThemeColours} from '@theme';
import {useAppTheme} from '@hooks';
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

export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}
