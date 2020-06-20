import { SessionStorageKey } from 'common/constants/sessionStorage';

export const setInSessionStorage = (key: SessionStorageKey, value: string) =>
  sessionStorage.setItem(key, value);

export const removeFromSessionStorage = (key: SessionStorageKey) =>
  sessionStorage.removeItem(key);

export const getFromSessionStorage = <T>(key: SessionStorageKey): T | null =>
  sessionStorage.getItem(key) && JSON.parse(sessionStorage.getItem(key)!);
