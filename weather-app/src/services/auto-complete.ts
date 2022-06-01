import type { AutocompleteResponse } from '@/src/types/index';
import { handleHttpRequest } from '@/src/functions/index';

const ENDPOINT = `/api/auto-complete`;

export async function getOccurrences({ text, idsRenderized}: { text: string, idsRenderized: string[]}) {
  const idsRenderizedQuery = idsRenderized.map(id => id).join('$');

  return handleHttpRequest<AutocompleteResponse[]>(`${ENDPOINT}?q=${text}&ids=${idsRenderizedQuery}`)
    .then( data => data )
    .catch( error => console.log(error) );
}