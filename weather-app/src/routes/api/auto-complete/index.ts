import type { RequestEvent } from "@sveltejs/kit";
import countryCodes from '@/src/data/country-codes.json';

interface AutoCompleteResponse {
  id:      number;
  name:    string;
  region:  string;
  country: string;
  lat:     number;
  lon:     number;
  url:     string;
}

const URL = 'https://weatherapi-com.p.rapidapi.com';
const options = {
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'fc6e05bb36msheefffdebdddd71bp153576jsn72eb5ac4b2fe'
	}
};

const parseData = ( data: AutoCompleteResponse[] ) => {
  return data.slice(0,5).map(({ name, region, country }) => {
    const foundCountry = countryCodes.find(({ country: c }) => c === country.toLowerCase());

    return {
      name,
      region,
      country,
      src: `https://countryflagsapi.com/svg/${foundCountry?.numeric}`
    }
  })
}

export async function get({url}: RequestEvent) {
  const query = url.searchParams.get('q');
  const response = await fetch(`${URL}/search.json?q=${query}`, {...options, method: 'GET'});
  const data: AutoCompleteResponse[] = await response.json();
  const hasData = data.length > 0;

  return {
    hasData,
    status: hasData ? 200 : 404,
    body: hasData ? parseData(data) : null
  }
}