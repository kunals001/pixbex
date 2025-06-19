import type { WebStorage } from "redux-persist";

const isServer = typeof window === "undefined";

const createNoopStorage = (): WebStorage => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getItem: (_key: string) => Promise.resolve(null),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setItem: (_key: string, _value: string) => Promise.resolve(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeItem: (_key: string) => Promise.resolve(),
  };
};

import storage from "redux-persist/lib/storage";

const exportedStorage: WebStorage = isServer ? createNoopStorage() : storage;

export default exportedStorage;
