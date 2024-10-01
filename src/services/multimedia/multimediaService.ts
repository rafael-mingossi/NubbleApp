import {ImageForUpload} from './multimediaType.ts';

function prepareImageForUpload(imageUri: string): ImageForUpload {
  //TODO: implement

  return {
    uri: imageUri,
    name: 'name',
    type: 'image/jpg',
  };
}

export const multimediaService = {prepareImageForUpload};
