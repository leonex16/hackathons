export const saveToLocalStorage = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key);
  
  return item === null
    ? item
    : JSON.parse(item);
}