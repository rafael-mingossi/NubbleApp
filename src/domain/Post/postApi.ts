import {api, PageAPI, PageParams} from '@api';
import {PostAPI} from '@domain';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1500));
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params: params,
  });
  return response.data;
}

export const postApi = {
  getList,
};
