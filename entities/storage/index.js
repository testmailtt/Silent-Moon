// @flow

export const storageKeys = {};

export type StorageKey = $Keys<typeof storageKeys>;

export const shouldCacheItems = [storageKeys.ACCESS_TOKEN];
