//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import {initialiseStorage} from '../services/storage';
import {inMemoryStorage} from '../services/storage/implementation/jest/inMemoryStorage.ts';

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameraRoll: {
    getPhotos: jest.fn(async () => ({
      edges: [
        {node: {image: {uri: 'image-1'}}},
        {node: {image: {uri: 'image-2'}}},
        {node: {image: {uri: 'image-3'}}},
      ],
    })),
  },
}));

jest.mock('../services/permission/permissionService', () => ({
  permissionService: {
    request: jest.fn(),
    check: jest.fn(),
  },
}));

jest.mock('expo-image-manipulator', () => {
  return {
    manipulateAsync: jest.fn(),
  };
});

initialiseStorage(inMemoryStorage);
