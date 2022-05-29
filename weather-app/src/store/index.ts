import type { Settings, Weather } from '@/src/types/index';
import { writable } from 'svelte/store';

const initSettings = () => {
  const { set, subscribe, update } = writable<Settings>({
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
    set,
    updateProperty
  }
}

const initHandleVisibility = () => {
  const state = {
    header: false,
    leftScreen: false
  };
  const { set, subscribe, update } = writable( state );

  const setVisibility = ( property: keyof typeof state, visibility: boolean ) => {
    update( prevState => {
      prevState[property] = visibility;
      return prevState;
    });
  }

  const resetState = () => set(state);

  return {
    subscribe,
    setVisibility,
    resetState
  }
}

export const settings = initSettings();
export const handleVisibility = initHandleVisibility()