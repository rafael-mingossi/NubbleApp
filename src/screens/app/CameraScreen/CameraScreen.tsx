import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {multimediaService} from '@services';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenProps} from '@routes';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const camera = useRef<Camera>(null);

  const format = useCameraFormat(device, Templates.Instagram);

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  async function takePhoto() {
    if (camera.current) {
      const photoFile = await camera.current?.takePhoto({
        flash: flashOn ? 'on' : 'off',
        // qualityPrioritization: 'quality',
      });

      navigation.navigate('PublishPostScreen', {
        imageUri: multimediaService.prepareImageUri(photoFile.path),
      });
    }
  }

  function toggleFlash() {
    setFlashOn(prevState => !prevState);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Allow Nubble to access the camera">
      <Box flex={1}>
        {device != null && (
          <Camera
            ref={camera}
            format={format}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            photo={true}
            onInitialized={() => setIsReady(true)}
            // enableHighQualityPhotos={true} //In case the photos have quality set, we need to enable this option for IOS
          />
        )}
        <Box flex={1} justifyContent="space-between">
          <Box {...$controlAreaTop} style={{paddingTop: top}}>
            <Icon
              name="arrowLeft"
              color="grayWhite"
              onPress={navigation.goBack}
            />
            <Icon
              name={flashOn ? 'flashOn' : 'flashOff'}
              color="grayWhite"
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>
          <Box {...$controlAreaBottom}>
            {isReady && (
              <Icon
                size={80}
                name="cameraClick"
                color="grayWhite"
                onPress={takePhoto}
              />
            )}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}

const $controlAreaTop: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT - CONTROL_DIF,
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingHorizontal: 's24',
};

const $controlAreaBottom: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT + CONTROL_DIF,
  alignItems: 'center',
  justifyContent: 'center',
};
