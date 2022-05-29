import type { RequestEvent } from '@sveltejs/kit';
import type { AutoComplete } from '@/src/routes/api/auto-complete/types';
import countryCodes from '@/src/data/country-codes.json';

const URL = 'https://weatherapi-com.p.rapidapi.com';
const options = {
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': 'fc6e05bb36msheefffdebdddd71bp153576jsn72eb5ac4b2fe',
  },
};

const filterData = (data: AutoComplete[], ids: string) => {
  const MAX_ITEMS = 5;
  const currentIds = ids.split('$');

  return data
    .filter(({ lat, lon }) => {
      const id = `${lat};${lon}`;
      const isRenderizedItem = currentIds.includes(id);

      return !isRenderizedItem;
    })
    .slice(0, MAX_ITEMS);
};

const mapData = (data: AutoComplete[]) => {
  return data.map(({ country, lat, lon, name, region }) => {
    const foundCountry = countryCodes.find(({ country: c }) => c === country.toLowerCase());

    return {
      id: `${lat};${lon}`,
      name,
      region,
      country,
      src: `https://countryflagsapi.com/svg/${foundCountry?.numeric}`,
    };
  });
};

const parseData = (data: AutoComplete[], ids: string) => {
  const filteredData = filterData(data, ids);

  return mapData(filteredData);
};

export async function get({ url }: RequestEvent) {
  const query = url.searchParams.get('q');
  const ids = url.searchParams.get('ids') ?? '';

  const response = await fetch(`${URL}/search.json?q=${query}`, { ...options, method: 'GET' });
  const data: AutoComplete[] = await response.json();
  const hasData = data.length > 0;

  return {
    status: hasData ? 200 : 404,
    body: hasData ? parseData(data, ids) : null,
  };
}
