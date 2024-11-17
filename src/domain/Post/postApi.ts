import {PageAPI, PageParams} from '@api';
import {PostAPI} from '@domain';
import {ImageForUpload} from '@services';

import {api} from '../../api/apiInstance';

async function getList(
  params?: PageParams & {userId?: number},
): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params: params,
  });
  return response.data;
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<PostAPI> {
  const form = new FormData();
  form.append('text', text);
  form.append('imageCover', imageCover);

  const response = await api.postForm<PostAPI>('user/post', form);
  return response.data;
}

async function getById(postId: string): Promise<PostAPI> {
  const response = await api.get<PostAPI>(`user/post/${postId}`);
  return response.data;
}

export const postApi = {
  getList,
  createPost,
  getById,
};
