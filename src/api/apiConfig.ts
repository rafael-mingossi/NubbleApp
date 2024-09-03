import {authApi, AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  saveCredentials,
  removeCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authApi.isRefreshTokenRequest(failedRequest);

      if (responseError.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          await removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials =
          await authService.authenticatedByRefreshToken(
            authCredentials.refreshToken,
          );

        await saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }

      await Promise.reject(responseError);
    },
  );

  return () => api.interceptors.response.eject(interceptor);
}
