import {Permission, PermissionsAndroid, Platform} from 'react-native';

import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes.ts';

async function check(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapNamePermission(name);
  if (permission) {
    const result = await PermissionsAndroid.check(permission);

    if (result) {
      return 'granted';
    }
    return 'denied';
  }

  return 'unavailable';
}

async function request(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapNamePermission(name);
  if (permission) {
    return await PermissionsAndroid.request(permission);
  }
  return 'unavailable';
}

function mapNamePermission(name: PermissionName): Permission | null {
  switch (name) {
    case 'photoLibrary':
      // @ts-ignore
      if (Platform.Version >= 33) {
        return 'android.permission.READ_MEDIA_IMAGES';
      } else {
        return 'android.permission.READ_EXTERNAL_STORAGE';
      }
    case 'camera':
      return 'android.permission.CAMERA';
    default:
      return null;
  }
}

export const permissionService: PermissionService = {request, check};
