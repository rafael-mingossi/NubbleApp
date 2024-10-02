import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {PhotoListPaginated} from './multimediaType.ts';
import {ImageForUpload} from './multimediaType.ts';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({first: 10, after: cursor});

  const photoList = photoPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  };
}

function prepareImageForUpload(imageUri: string): ImageForUpload {
  //TODO: implement

  return {
    uri: imageUri,
    name: 'name',
    type: 'image/jpg',
  };
}

export const multimediaService = {prepareImageForUpload, getPhotos};
