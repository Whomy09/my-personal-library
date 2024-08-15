export const generateId = () => Math.random().toString(36).slice(2, 9);

export const getLocalStorage = <T>(key: string) => {
  const localStorageItem = localStorage.getItem(key);

  if (!localStorageItem) {
    throw new Error(`${key} not found`);
  }

  return JSON.parse(localStorageItem) as T;
};

export const setLocalStorage = <T>(key: string, data: T) => {
  const serializedObj = JSON.stringify(data);
  localStorage.setItem(key, serializedObj);
};
