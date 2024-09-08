import {renderHook} from '@testing-library/react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AllTheProviders} from 'test-utils';

import {useAppSafeArea} from '@hooks';
import {theme} from '@theme';

jest.mock('react-native-safe-area-context');

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe area is less than the min requirement, it returns the min requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 4, bottom: 5} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    });

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  test('when the safe area is greater than the min requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 44, bottom: 55} as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    });

    expect(result.current.top).toEqual(44);
    expect(result.current.bottom).toEqual(55);
  });
});
