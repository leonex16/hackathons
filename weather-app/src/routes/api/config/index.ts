export const URL = import.meta.env.VITE_API_URL;

export const options: RequestInit = {
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
  },
};