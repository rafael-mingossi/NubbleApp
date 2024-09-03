// import {asyncStorage} from './implementation/asyncStorage.ts';
// import {MMKVStorage} from './implementation/MMKVStorage.ts';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage;

export function initialiseStorage(storageImpl: Storage) {
  storage = storageImpl;
}
