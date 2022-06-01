import type { WeatherRealtimeResponse } from '@/src/types';
import { handleHttpRequest } from '@/src/functions';

const ENDPOINT = '/api/weather-realtime';

export function getWeatherRealtimeAuto() {
  return handleHttpRequest<WeatherRealtimeResponse>(`${ENDPOINT}`)
    .then( data => data )
    .catch( error => console.log(error) );
}

export async function getWeatherRealtimeByCords({ lat, lon }: { lat: string, lon: string }) {
  return handleHttpRequest<WeatherRealtimeResponse>(`${ENDPOINT}?lat=${lat}&lon=${lon}`)
    .then( data => data )
    .catch( error => console.log(error) );
}