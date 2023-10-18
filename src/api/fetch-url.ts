import utils from '@/api/api-utils'

export function fetchUrl(gs_source_url: string) {

  return utils.post('/api/fetch_url_direct', {gs_source_url}, true)

}