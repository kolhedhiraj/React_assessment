const storage = window.localStorage;

const asyncStorage = {
  getItem: (key) => {
    return Promise.resolve(storage.getItem(key));
  },

  setItem: (key, value) => {
    storage.setItem(key, value);
    return Promise.resolve();
  },

  removeItem: (key) => {
    storage.removeItem(key);
    return Promise.resolve();
  },
};

export default asyncStorage;