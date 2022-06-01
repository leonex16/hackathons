import type { RequestEvent } from '@sveltejs/kit';
import type { WeatherRealtime } from '@/src/routes/api/weather-realtime/types';
import { options, URL } from '@/src/routes/api/config/index';

const mapData = ({ current, location }: WeatherRealtime) => {
  const { condition, humidity, is_day, last_updated, precip_mm, temp_c, temp_f, wind_kph } =
    current;
  const { country, lat, localtime, lon, name, region } = location;
  const { icon, text } = condition;

  return {
    id: `${lat};${lon}`,
    isMinimized: true,
    condition: {
      // https://www.weatherapi.com/docs/conditions.json
      icon,
      text,
    },
    location: {
      name,
      country,
      localtime,
      region,
    },
    current: {
      dayOrNight: is_day ? 'Day' : 'Night',
      lastUpdated: last_updated,
      temperature: {
        C: temp_c,
        F: temp_f,
      },
      humidity: {
        label: 'Humidity',
        value: humidity,
        unit: '%',
      },
      precipitation: {
        label: 'Precipitation',
        value: precip_mm,
        unit: 'mm',
      },
      wind: {
        label: 'Wind Speed',
        value: wind_kph,
        unit: 'Km/h',
      },
    },
  };
};

export async function get({ url }: RequestEvent) {
  const lat = url.searchParams.get('lat');
  const lon = url.searchParams.get('lon');
  const query = lat && lon ? `${lat},${lon}` : 'auto%3Aip';

  const response = await fetch(`${URL}/current.json?q=${query}`, options);
  const data: WeatherRealtime = await response.json();

  return {
    status: 200,
    body: mapData(data),
  };
}
