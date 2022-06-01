import type { RequestEvent } from '@sveltejs/kit';
import type { AutoComplete } from '@/src/routes/api/auto-complete/types';
import { options, URL } from '@/src/routes/api/config/index';
import countryCodes from '@/src/data/country-codes.json';

const removeRenderizedItems = (data: AutoComplete[], renderizedIds: string[]) => {
  return data.filter(({ lat, lon }) => {
    const id = `${lat};${lon}`;
    const isRenderizedItem = renderizedIds.includes(id);

    return !isRenderizedItem;
  });
};
// TODO: Create test that count the number of items in the response
const filterData = (data: AutoComplete[], ids: string) => {
  const MAX_ITEMS = 5;
  const currentIds = ids.split('$');
  const itemsNotRenderized = removeRenderizedItems(data, currentIds);

  return itemsNotRenderized.slice(0, MAX_ITEMS);
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

const manipulateData = (data: AutoComplete[], ids: string) => {
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
    body: hasData ? manipulateData(data, ids) : null,
  };
}
