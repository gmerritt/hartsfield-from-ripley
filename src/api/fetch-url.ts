import _ from 'lodash'
import {App, nextTick} from 'vue'
import { useContextStore } from '@/stores/context'
import axios from 'axios'
import utils from '@/api/api-utils'


export function fetchUrl(gs_source_url: string) {

  // In later versions of Ripley, with the post support built-in, we'd do something like this:
  //return utils.post('/api/fetch_url_direct',{gs_source_url})
  //--> dictionary w/ variable & value "gs_source_url"

  return utils.get('/api/fetch_url_direct?gs_source_url=' + encodeURIComponent(gs_source_url), true)


}