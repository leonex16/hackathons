export const saveToLocalStorage = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key);
  
  return item === null
    ? item
    : JSON.parse(item);
}

export const debounce = (func: (args: Record<string, unknown>) => unknown, waitMs: number) => {
  let debounceTimer = 0;

  return function({ cancel = false, ...args}) {
    if (cancel) return;

    clearTimeout(debounceTimer);

    debounceTimer = window.setTimeout(() => func(args), waitMs);
  }
}