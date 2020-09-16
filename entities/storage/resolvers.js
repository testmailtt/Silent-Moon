import {
  getStorageItem as getLocalStorageItem,
  setStorageItem as setLocalStorageItem,
} from 'utils/storage';

const STORAGE_STATE_KEY = 'storage';

export const resolveSaveStorage = async (storage) => {
  const storedData = await getLocalStorageItem(STORAGE_STATE_KEY);

  const parsedData = storedData ? JSON.parse(storedData) : {};

  const updatedData = {
    ...parsedData,
    ...storage,
  };

  return setLocalStorageItem(STORAGE_STATE_KEY, JSON.stringify(updatedData));
};

export const resolveStorage = async () => {
  const storedData = await getLocalStorageItem(STORAGE_STATE_KEY);

  const parsedData = storedData ? JSON.parse(storedData) : {};

  return parsedData;
};
