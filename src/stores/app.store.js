import { createStore } from './store';

export const AppStore = createStore({
  language: 'vi',
});

export const useAppStore = AppStore.useStore;
