import {useEffect, useState} from 'react';

import {permissionService} from './permissionService.ts';
import {PermissionName, PermissionStatus} from './permissionTypes.ts';

export function usePermission(permissionName: PermissionName) {
  const [status, setStatus] = useState<PermissionStatus>();
  const [isLoading, setIsLoading] = useState(true);

  async function checkPermission() {
    try {
      setIsLoading(true);

      const initialStatus = await permissionService.check(permissionName);

      if (initialStatus === 'denied') {
        const _status = await permissionService.request(permissionName);
        setStatus(_status);
      } else {
        setStatus(initialStatus);
      }
    } catch (e) {
      setStatus('unavailable');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    status,
    isLoading,
  };
}
