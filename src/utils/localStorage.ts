export const localFunctions = {
  get: (key: string) => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }

    return null;
  },

  set: (key: string, object: unknown) => {
    localStorage.setItem(key, JSON.stringify(object));
  },
};
