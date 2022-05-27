import type { Settings } from '@/src/types/index';
import { writable } from 'svelte/store';

const initSettings = () => {
  const { subscribe, update } = writable<Settings>({
    isSaveNetworkActive: true,
    isDarkModeActive: false,
  });

  const updateProperty = (property: keyof Settings, value: boolean) => {
    update(settings => {
      settings[property] = value;
      return settings;
    });
  }

  return {
    subscribe,
    updateProperty
  }
}

const initLeftScreen = () => {
  const {set, subscribe} = writable(false);

  const showLeftScreen = (value: boolean) => {
    set(value);
  };

  return {
    subscribe,
    showLeftScreen
  }
}

export const settings = initSettings();
export const leftScreen = initLeftScreen();